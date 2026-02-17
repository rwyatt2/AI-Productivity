import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function TerminalDemo() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot" />
        <div className="terminal-dot" />
        <div className="terminal-dot" />
      </div>
      <div className="terminal-body">
        <div style={{ marginBottom: '1rem' }}>
          <span className="cmd">user@cursor ~ % </span>
          <span>Please implement the auth system.</span>
        </div>
        <div style={{ marginBottom: '1rem', color: '#ffbd2e' }}>
          <span className="output">AI Assistant (Safety Check):</span><br/>
          <span>Wait. I see no auth spec in `docs/specs/auth.md`.</span><br/>
          <span>Should I create a spec first? (Y/n)</span>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <span className="cmd">user@cursor ~ % </span>
          <span>Switch: SPEC</span>
        </div>
        <div style={{ color: '#4ec9b0' }}>
          <span className="output">AI Assistant (Spec Mode):</span><br/>
          <span>Switching to SPEC mode. I will now plan the auth system based on your `docs/ai/ai-config.md`.</span><br/>
          <span>Scanning for existing patterns...</span>
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
}

function Feature({title, description, icon}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="AI Kit for Cursor and Copilot">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Stop Chatting. Start Building.
          </Heading>
          <p className="hero__subtitle">
            The Missing Operating System for AI Coding Agents.
          </p>
          <div className={styles.buttons} style={{ marginTop: '2rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Install the Kit
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <TerminalDemo />
          
          <div className="feature-grid">
            <Feature 
              icon="🛑"
              title="No More Loops"
              description="Strict protocols prevent the AI from getting stuck in endless refactoring cycles. It stops and asks for help."
            />
            <Feature 
              icon="🧠"
              title="No Hallucinations"
              description="Grounded by your docs/ai/ai-config.md. The AI knows your tech stack, your rules, and your forbidden patterns."
            />
            <Feature 
              icon="⚡️"
              title="Switch Modes"
              description="Explicitly switch between SPEC (planning) and IMPLEMENT (coding). Never mix the two."
            />
          </div>

          <div style={{ textAlign: 'center', margin: '4rem 0' }}>
            <Heading as="h2">Ready to take control?</Heading>
            <p>Join the developers who have stopped fighting their AI tools.</p>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/install-by-copying">
              Get Started Now
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
