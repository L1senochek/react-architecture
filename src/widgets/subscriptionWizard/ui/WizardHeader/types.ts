import type { WizardStep } from '../../model/types';

export interface WizardHeaderProps {
  title: string;
  step: WizardStep;
  totalSteps: number;
}
