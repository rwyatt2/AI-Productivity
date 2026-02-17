import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FEATURES: { title: string; description: string }[] = [
  {
    title: 'Spec-first',
    description: 'Clarify the problem and acceptance criteria before writing code.',
  },
  {
    title: 'Safe implementation',
    description: 'Minimal diffs, no invented paths or APIs, security when it matters.',
  },
  {
    title: 'Cursor & Copilot',
    description: 'Works with your editor; one kit, consistent behavior.',
  },
];

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURES.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
