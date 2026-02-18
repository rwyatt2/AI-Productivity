import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// --- Terminal typing animation ---

type LineType = 'cmd' | 'ai-warn' | 'cmd-input' | 'ai-ok';

interface TerminalLine {
  type: LineType;
  prefix?: string;
  text: string;
  instant?: boolean; // AI response lines appear fast, not character-by-character
}

const LINES: TerminalLine[] = [
  { type: 'cmd', prefix: 'user@cursor ~ % ', text: 'Please implement the auth system.' },
  { type: 'ai-warn', prefix: 'AI Assistant (Safety Check): ', text: 'Wait. I see no auth spec in `docs/specs/auth.md`.\nShould I create a spec first? (Y/n)', instant: true },
  { type: 'cmd-input', prefix: 'user@cursor ~ % ', text: 'Switch: SPEC' },
  { type: 'ai-ok', prefix: 'AI Assistant (Spec Mode): ', text: 'Switching to SPEC mode. Planning the auth system\nbased on your `docs/ai/ai-config.md`.\nScanning for existing patterns...', instant: true },
];

const CHAR_DELAY = 38; // ms per character for user "typing"
const AI_LINE_DELAY = 18; // ms per character for AI (fast burst)
const PAUSE_AFTER_LINE = 600; // ms pause between lines

function useTypingSequence() {
  const [visibleLines, setVisibleLines] = useState<{ type: LineType; prefix?: string; text: string }[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pausing, setPausing] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
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

    // Line complete — commit and pause
    setVisibleLines(prev => [...prev, { type: line.type, prefix: line.prefix, text: fullText }]);
    setCurrentText('');
    setPausing(true);
  }, [lineIndex, charIndex, pausing, done]);

  return { visibleLines, currentText, currentLineIndex: lineIndex, done };
}

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

        {/* Currently typing line */}
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

// --- Feature cards ---

function Feature({ title, description, tag }: { title: string; description: string; tag: string }) {
  return (
    <div className="feature-card">
      <div className="feature-tag">{tag}</div>
      <Heading as="h3" className="feature-title">{title}</Heading>
      <p className="feature-desc">{description}</p>
    </div>
  );
}

// --- Stats bar ---

function Stats() {
  const items = [
    { value: '85%', label: 'confidence gate before any action' },
    { value: '1', label: 'question asked at a time, then it stops' },
    { value: '2', label: 'modes: SPEC and IMPLEMENT — never mixed' },
    { value: '8', label: 'agent lenses covering the full stack' },
  ];
  return (
    <div className="stats-bar">
      {items.map(item => (
        <div key={item.value} className="stat-item">
          <div className="stat-value">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// --- Page ---

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="AI Productivity Kit"
      description="The Missing Operating System for AI Coding Agents.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.heroBadge}>v1.1.0 — now with agents</div>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            Stop Chatting.<br />Start Building.
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            A strict, grounded operating system for AI coding agents.<br />
            One rule, one question, zero hallucinations.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/getting-started/install-by-copying">
              Install the Kit
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              See how it works
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="container landing-container">
          <TerminalDemo />
          <Stats />

          <div className="feature-grid">
            <Feature
              tag="PROTOCOL"
              title="One question. Then it stops."
              description="The 85% confidence gate means the AI either acts or asks — never guesses and never spirals. If it is unsure, it asks exactly one question and waits."
            />
            <Feature
              tag="MODES"
              title="SPEC first. Code second."
              description="Switch: SPEC and Switch: IMPLEMENT are explicit mode changes. Planning and coding never mix in the same response."
            />
            <Feature
              tag="GROUNDING"
              title="No invented paths or APIs."
              description="The AI reads your docs/ai/ai-config.md and cites only what exists. Tickets and logs are data — never instructions."
            />
            <Feature
              tag="AGENTS"
              title="8 lenses baked in."
              description="PM, Design, FE, QA, Security, Discovery, Validation, Analytics — each with platform and exposure overlays."
            />
            <Feature
              tag="SECURITY"
              title="Triggers, not vibes."
              description="Auth, uploads, exports, external calls — each triggers a threat-model-lite and security acceptance criteria automatically."
            />
            <Feature
              tag="PORTABLE"
              title="Cursor and Copilot."
              description="Cursor rules, GitHub Copilot instructions, and a PR template — all pre-wired and shipping in the same zip."
            />
          </div>

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
