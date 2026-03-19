import { useRef, useState, type ChangeEvent } from 'react';

import { Input } from 'shared/ui/Input';

import styles from './DebouncedLogger.module.css';

const DEBOUNCE_DELAY = 1e3;

export function DebouncedLogger() {
  const [value, setValue] = useState('');
  const timeoutRef = useRef<number | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      console.log('DebouncedLogger:', nextValue);
    }, DEBOUNCE_DELAY);
  };

  return (
    <div className={styles.debouncedLogger}>
      <label className={styles.label}>
        <span>Введите текст:</span>
        <Input
          type="text"
          inputSize="sm"
          value={value}
          placeholder="Начните печатать..."
          variant="white"
          onChange={handleChange}
        />
      </label>
      <div className={styles.hint}>Лог в консоли через 1 секунду</div>
    </div>
  );
}
