import type { WizardState } from './types';

export function subscribeAction(_prevState: WizardState, formData: FormData): WizardState {
  const email = formData.get('email')?.toString().trim() ?? '';

  if (!email) {
    return { status: 'error', error: 'Укажите email' };
  }

  if (!email.includes('@')) {
    return { status: 'error', error: 'Некорректный email' };
  }

  return { status: 'success' };
}
