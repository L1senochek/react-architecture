import { ClickTimer } from 'features/refExamples/clickTimer';
import { PreviousInput } from 'features/refExamples/previousInput';
import { FocusTracker } from 'features/refExamples/focusTracker';
import { DebouncedLogger } from 'features/refExamples/debouncedLogger';

import type { RefExampleItem } from '../model/types';

export const REF_EXAMPLES: RefExampleItem[] = [
  {
    id: 'click-timer',
    title: '1) Компонент ClickTimer:',
    content: <ClickTimer />,
  },
  {
    id: 'previous-input',
    title: '2) Компонент PreviousInput:',
    content: <PreviousInput />,
  },
  {
    id: 'focus-tracker',
    title: '3) Компонент FocusTracker:',
    content: <FocusTracker />,
  },
  {
    id: 'debounced-logger',
    title: '4) Компонент DebouncedLogger с useRef:',
    content: <DebouncedLogger />,
  },
];
