import { ClickTimer } from 'features/refExamples/ClickTimer';
import { PreviousInput } from 'features/refExamples/PreviousInput';

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
];
