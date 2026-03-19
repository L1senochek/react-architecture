import { useRef } from 'react';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import styles from './FocusTracker.module.css';

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const secondInputRef = useRef<HTMLInputElement | null>(null);
  const focusSwitchCountRef = useRef(0);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { relatedTarget } = event;

    if (
      relatedTarget &&
      (relatedTarget === firstInputRef.current || relatedTarget === secondInputRef.current)
    ) {
      focusSwitchCountRef.current += 1;

      console.log('FocusTracker: focus switches', {
        count: focusSwitchCountRef.current,
      });
    }
  };

  const handleFocusFirst = () => {
    firstInputRef.current?.focus();
  };

  return (
    <div className={styles.focusTracker}>
      <div className={styles.inputs}>
        <Input
          id="first-input"
          ref={firstInputRef}
          variant="white"
          inputSize="sm"
          placeholder="Первое поле"
          onFocus={handleFocus}
        />
        <Input
          id="second-input"
          ref={secondInputRef}
          variant="white"
          inputSize="sm"
          placeholder="Второе поле"
          onFocus={handleFocus}
        />
      </div>

      <Button size="sm" onClick={handleFocusFirst}>
        Сфокусировать на первом
      </Button>

      <div className={styles.hint}>Счётчик переходов в консоли</div>
    </div>
  );
}
