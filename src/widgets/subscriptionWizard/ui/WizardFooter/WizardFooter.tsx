import type { PropsWithChildren } from 'react';

import styles from './WizardFooter.module.css';

export function WizardFooter({ children }: PropsWithChildren) {
  return <footer className={styles.wizardFooter}>{children}</footer>;
}
