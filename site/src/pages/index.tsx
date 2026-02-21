import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import progressData from '../../data/progress.json';

import styles from './index.module.css';

// --- Terminal typing animation ---

type LineType = 'cmd' | 'ai-warn' | 'cmd-input' | 'ai-ok';

interface TerminalLine {
  type: LineType;
  prefix?: string;
  text: string;
  instant?: boolean;
}

const LINES: TerminalLine[] = [
  { type: 'cmd', prefix: 'user@cursor ~ % ', text: 'Please implement the auth system.' },
  { type: 'ai-warn', prefix: 'AI Assistant (Safety Check): ', text: 'Wait. I see no auth spec in `docs/specs/auth.md`.\nShould I create a spec first? (Y/n)', instant: true },
  { type: 'cmd-input', prefix: 'user@cursor ~ % ', text: 'Switch: SPEC' },
  { type: 'ai-ok', prefix: 'AI Assistant (Spec Mode): ', text: 'Switching to SPEC mode. Planning the auth system\nbased on your `docs/ai/ai-config.md`.\nScanning for existing patterns...', instant: true },
];

const CHAR_DELAY = 38;
const AI_LINE_DELAY = 18;
const PAUSE_AFTER_LINE = 600;
const LOOP_PAUSE = 2500;

function useTypingSequence() {
  const [visibleLines, setVisibleLines] = useState<{ type: LineType; prefix?: string; text: string }[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pausing, setPausing] = useState(false);
  const [done, setDone] = useState(false);

  // Check for reduced motion
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion.current) {
      setVisibleLines(LINES.map(l => ({ type: l.type, prefix: l.prefix, text: l.text })));
      setDone(true);
    }
  }, []);

  // Main typing loop
  useEffect(() => {
    if (done || prefersReducedMotion.current) return;
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[lineIndex];
    const fullText = line.text;
    const delay = line.instant ? AI_LINE_DELAY : CHAR_DELAY;

    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setCharIndex(0);
        setCurrentText('');
        setLineIndex(i => i + 1);
      }, PAUSE_AFTER_LINE);
      return () => clearTimeout(t);
    }

    if (charIndex < fullText.length) {
      const t = setTimeout(() => {
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(i => i + 1);
      }, delay);
      return () => clearTimeout(t);
    }

    setVisibleLines(prev => [...prev, { type: line.type, prefix: line.prefix, text: fullText }]);
    setCurrentText('');
    setPausing(true);
  }, [lineIndex, charIndex, pausing, done]);

  // Loop: reset after done
  useEffect(() => {
    if (!done || prefersReducedMotion.current) return;
    const t = setTimeout(() => {
      setVisibleLines([]);
      setCurrentText('');
      setLineIndex(0);
      setCharIndex(0);
      setPausing(false);
      setDone(false);
    }, LOOP_PAUSE);
    return () => clearTimeout(t);
  }, [done]);

  return { visibleLines, currentText, currentLineIndex: lineIndex, done };
}

// --- Count-up hook ---

function useCountUp(target: number, active: boolean, duration = 1400): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let rafId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);
  return value;
}

// --- Color map ---

const COLOR: Record<LineType, string> = {
  cmd: '#5af',
  'cmd-input': '#5af',
  'ai-warn': '#ffbd2e',
  'ai-ok': '#4ec9b0',
};

function renderText(text: string) {
  return text.split('\n').map((line, i, arr) => (
    <React.Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

// --- Terminal ---

function TerminalDemo() {
  const { visibleLines, currentText, currentLineIndex, done } = useTypingSequence();
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  const currentLine = currentLineIndex < LINES.length ? LINES[currentLineIndex] : null;

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <span className="terminal-title">cursor — ai-productivity</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {visibleLines.map((line, i) => (
          <div key={i} className="terminal-line" style={{ color: COLOR[line.type] }}>
            {(line.type === 'cmd' || line.type === 'cmd-input') && (
              <span className="cmd">{line.prefix}</span>
            )}
            {(line.type === 'ai-warn' || line.type === 'ai-ok') && (
              <>
                <span style={{ color: '#888' }}>{'> '}</span>
                <span style={{ color: COLOR[line.type], fontWeight: 600 }}>{line.prefix}</span>
              </>
            )}
            <span style={{ color: line.type === 'cmd' || line.type === 'cmd-input' ? '#e2e8f0' : COLOR[line.type] }}>
              {renderText(line.text)}
            </span>
          </div>
        ))}

        {currentLine && (
          <div className="terminal-line" style={{ color: COLOR[currentLine.type] }}>
            {(currentLine.type === 'cmd' || currentLine.type === 'cmd-input') && (
              <span className="cmd">{currentLine.prefix}</span>
            )}
            {(currentLine.type === 'ai-warn' || currentLine.type === 'ai-ok') && (
              <>
                <span style={{ color: '#888' }}>{'> '}</span>
                <span style={{ color: COLOR[currentLine.type], fontWeight: 600 }}>{currentLine.prefix}</span>
              </>
            )}
            <span style={{ color: currentLine.type === 'cmd' || currentLine.type === 'cmd-input' ? '#e2e8f0' : COLOR[currentLine.type] }}>
              {renderText(currentText)}
            </span>
            {!done && <span className="cursor" />}
          </div>
        )}

        {done && (
          <div className="terminal-line" style={{ marginTop: '0.5rem' }}>
            <span className="cmd">user@cursor ~ % </span>
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

// --- Stats ---

function StatItem({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="stat-item">
      <div className="stat-value">{value}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = [
    { target: 85, suffix: '%', label: 'confidence gate before any action' },
    { target: 1, suffix: '', label: 'question asked at a time, then it stops' },
    { target: 2, suffix: '', label: 'modes: SPEC and IMPLEMENT — never mixed' },
    { target: 8, suffix: '', label: 'agent lenses covering the full stack' },
  ];

  return (
    <div className="stats-bar" ref={containerRef}>
      {items.map(item => (
        <StatItem
          key={item.label}
          target={item.target}
          suffix={item.suffix}
          label={item.label}
          active={active}
        />
      ))}
    </div>
  );
}

// --- Feature icons (inline SVG, Heroicons Outline style) ---

const ICONS: Record<string, React.ReactElement> = {
  PROTOCOL: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  MODES: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  GROUNDING: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  ADVISORIES: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  ),
  SECURITY: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  PORTABLE: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
};

// --- Feature cards ---

function Feature({ title, description, tag }: { title: string; description: string; tag: string }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{ICONS[tag]}</div>
      <div className="feature-tag">{tag}</div>
      <Heading as="h3" className="feature-title">{title}</Heading>
      <p className="feature-desc">{description}</p>
    </div>
  );
}

// --- How It Works ---

const STEPS = [
  {
    number: '1',
    title: 'Session Kickoff',
    desc: 'Paste once. Sets SPEC-first protocol, 85% gate, and one-question rule.',
  },
  {
    number: '2',
    title: 'Context Pack',
    desc: '3–7 files and switches. Grounds the AI in your repo, no guessing.',
  },
  {
    number: '3',
    title: 'Router',
    desc: 'Picks SPEC or IMPLEMENT. Planning and coding never mix.',
  },
  {
    number: '4',
    title: 'SPEC → IMPLEMENT',
    desc: 'Plan first. Code second. Security checks when it matters. Ship.',
  },
];

function HowItWorks() {
  return (
    <div className={styles.howItWorks}>
      <Heading as="h2" className={styles.howItWorksTitle}>How it works</Heading>
      <div className={styles.stepRow}>
        {STEPS.map((step, i) => (
          <React.Fragment key={step.number}>
            <div className={styles.step}>
              <div className={styles.stepCircle}>{step.number}</div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            </div>
            {i < STEPS.length - 1 && <div className={styles.stepConnector} aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// --- Floating hero badges ---

const FLOATING_BADGES = [
  { text: 'Switch: SPEC', cls: styles.floatBadge1 },
  { text: '85% gate', cls: styles.floatBadge2 },
  { text: 'one question', cls: styles.floatBadge3 },
  { text: 'no invented paths', cls: styles.floatBadge4 },
];

function FloatingBadges() {
  return (
    <div className={styles.floatingBadgesContainer} aria-hidden="true">
      {FLOATING_BADGES.map(b => (
        <div key={b.text} className={clsx(styles.floatingBadge, b.cls)}>
          {b.text}
        </div>
      ))}
    </div>
  );
}

// --- Progress / Latest ---

function ProgressShowcase() {
  const latest = progressData.slice(0, 3);
  return (
    <div className={styles.progressSection}>
      <Heading as="h2" className={styles.progressSectionTitle}>Latest Progress</Heading>
      <div className={styles.progressGrid}>
        {latest.map((item, i) => (
          <Link key={i} href={item.link} className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <span className={styles.progressTitle}>{item.title}</span>
              {item.date && <span className={styles.progressDate}>{item.date}</span>}
            </div>
            <p className={styles.progressDesc}>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Page ---

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { kitVersion, heroHighlight } = siteConfig.customFields as { kitVersion: string; heroHighlight: string };
  return (
    <Layout
      title="AI Productivity Kit"
      description="Rules and prompts you copy into your repo. Plan first, code second, security when it matters.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <FloatingBadges />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroBadge}>v{kitVersion} — {heroHighlight}</div>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            Stop Chatting.<br />Start Building.
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            The spec-first AI kit for Cursor and Copilot.<br />
            One question, two modes, no invented paths.
          </p>
          <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '1rem', opacity: 0.95, maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Rules, prompts, and config files you copy into your repo so Cursor (and Copilot / Antigravity) plan before coding, ask one question at a time, and pause for security when it matters.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/getting-started/install-by-copying">
              Install the Kit
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              See how it works
            </Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
            Copy into your repo in 5 minutes.
          </p>
        </div>
      </header>

      <main>
        <div className="container landing-container">
          <TerminalDemo />
          <HowItWorks />
          <Stats />

          <div className="feature-grid">
            <Feature
              tag="PROTOCOL"
              title="One question at a time."
              description="The 85% confidence gate means the AI either acts or asks — never guesses. If unsure, it asks exactly one question and waits."
            />
            <Feature
              tag="MODES"
              title="Two modes."
              description="SPEC (planning, PM, design) and IMPLEMENT (code, tests). Say Switch: SPEC or Switch: IMPLEMENT when needed."
            />
            <Feature
              tag="GROUNDING"
              title="Spec-first."
              description="Clarify the problem and acceptance criteria before code. The AI reads your docs/ai/ai-config.md. No invented paths or APIs."
            />
            <Feature
              tag="ADVISORIES"
              title="Advisories."
              description="Every response starts with a route, recommended model, context risk, and switch recommendations so you stay in control."
            />
            <Feature
              tag="SECURITY"
              title="Security stop gate."
              description="For high-risk work like auth, uploads, or exports, the AI asks one security question and stops until you answer."
            />
            <Feature
              tag="PORTABLE"
              title="Cursor and Copilot."
              description="Cursor rules, GitHub Copilot instructions, and Google Antigravity rules — all pre-wired and shipping in the same zip."
            />
          </div>

          <ProgressShowcase />

          <div className={styles.ctaSection}>
            <Heading as="h2">Ready to take control?</Heading>
            <p>Copy the kit into your repo. Open Cursor. Paste the Session Kickoff.</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/getting-started/install-by-copying">
                Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/reference/kit-preview">
                Preview the Files
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
