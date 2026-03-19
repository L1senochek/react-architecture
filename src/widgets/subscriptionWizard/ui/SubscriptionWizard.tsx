import { useActionState, useState } from 'react';

import { Button } from 'shared/ui/Button';

import { subscribeAction } from '../model/subscribeAction';
import type { WizardState, WizardStep } from '../model/types';
import { StepEmail } from './StepEmail/StepEmail';
import { StepSuccess } from './StepSuccess/StepSuccess';
import { WizardHeader } from './WizardHeader/WizardHeader';
import { WizardFooter } from './WizardFooter/WizardFooter';
import styles from './SubscriptionWizard.module.css';

export function SubscriptionWizard() {
  const formId = 'subscription-wizard-email-form';
  const [step, setStep] = useState<WizardStep>(1);

  const [state, formAction, isPending] = useActionState<WizardState, FormData>(
    (prev, formData) => {
      const next = subscribeAction(prev, formData);

      if (next.status === 'success') {
        setStep(2);
      }

      return next;
    },
    { status: 'idle' },
  );

  return (
    <section className={styles.subscription}>
      <WizardHeader title="Подписка на новости" step={step} totalSteps={2} />

      <article className={styles.wizardForm} role="group">
        {step === 1 && (
          <StepEmail formId={formId} state={state} formProps={{ action: formAction }} />
        )}

        {step === 2 && <StepSuccess />}
      </article>

      <WizardFooter>
        {step === 1 ? (
          <Button type="submit" size="sm" disabled={isPending} form={formId}>
            {isPending ? 'Отправка...' : 'Подписаться'}
          </Button>
        ) : (
          <Button
            type="button"
            size="sm"
            onClick={() => {
              setStep(1);
            }}
          >
            Подписаться ещё раз
          </Button>
        )}
      </WizardFooter>
    </section>
  );
}
