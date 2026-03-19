import { useRef } from 'react';

import { Button } from 'shared/ui/Button';

import styles from './ClickTimer.module.css';
import type { ClickData } from '../model/types';

export function ClickTimer() {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const now = Date.now();

    if (clickDataRef.current.startTime === null) {
      clickDataRef.current.startTime = now;
      clickDataRef.current.clickCount = 1;
      console.log('ClickTimer: First click!');
      return;
    }

    clickDataRef.current.clickCount += 1;
    const differentMs = now - clickDataRef.current.startTime;

    console.log('ClickTimer:', {
      differentMs: `${differentMs} ms`,
      clickCount: clickDataRef.current.clickCount,
    });
  };

  return (
    <div className={styles.clickTimer}>
      <Button onClick={handleClick} size="sm">
        ClickTimer
      </Button>
      <div>Лог в консоли</div>
    </div>
  );
}
