import { type ChangeEvent, useEffect, useRef, useState } from 'react';

import { Input } from 'shared/ui/Input';

import styles from './PreviousInput.module.css';

export function PreviousInput() {
  const [value, setValue] = useState('');
  const previousValueRef = useRef('');
  const [previousValue, setPreviousValue] = useState('');

  useEffect(() => {
    setPreviousValue(previousValueRef.current);
    previousValueRef.current = value;
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.previousInput}>
      <label className={styles.label}>
        <span>Введите текст:</span>
        <Input
          id="previous-input"
          type="text"
          inputSize="sm"
          value={value}
          placeholder="Введите текст"
          variant="white"
          onChange={handleChange}
        />
      </label>

      <div className={styles.previousValue}>
        Предыдущее значение:
        <span className={styles.previousValueText}>{previousValue || '-'}</span>
      </div>
    </div>
  );
}
