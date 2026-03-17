import type { Control, FieldErrors } from 'react-hook-form';

import type { RegisterFormValues } from '../../model/types';

export interface SocialLinksProps {
  control: Control<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>['socialLinks'];
}
