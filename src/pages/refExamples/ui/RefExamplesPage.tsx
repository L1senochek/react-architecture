import { REF_EXAMPLES } from './refExamples';

import styles from './RefExamplesPage.module.css';

export function RefExamplesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>useRef — практическое задание</h1>

        <div className={styles.cards}>
          {REF_EXAMPLES.map((item) => (
            <section key={item.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              {item.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
