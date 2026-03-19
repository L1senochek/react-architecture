export type WizardStep = 1 | 2;

export type WizardStatus = 'idle' | 'success' | 'error';

export interface WizardState {
  status: WizardStatus;
  error?: string;
}
