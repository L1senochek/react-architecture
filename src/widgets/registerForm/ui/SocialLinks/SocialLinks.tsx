import {
  useFieldArray,
  type Control,
  type FieldArrayWithId,
  type FieldErrors,
} from 'react-hook-form';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import type { RegisterFormValues } from '../../model/types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  control: Control<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>['socialLinks'];
}

export function SocialLinks({ control, errors }: SocialLinksProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  const handleAdd = () => {
    append({ url: '' });
  };

  const handleRemove = (
    index: number,
    items: FieldArrayWithId<RegisterFormValues, 'socialLinks', 'id'>[],
  ) => {
    if (items.length === 1) {
      return;
    }

    remove(index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Социальные ссылки</h2>
        <Button size="sm" onClick={handleAdd}>
          Добавить ссылку
        </Button>
      </div>

      <div className={styles.list}>
        {fields.map((field, index) => {
          const fieldError = errors?.[index]?.url;

          return (
            <div key={field.id} className={styles.item}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={`socialLinks-${index}`}>
                  URL профиля
                </label>
                <div className={styles.group}>
                  <Input
                    id={`socialLinks-${index}`}
                    placeholder="https://github.com/username"
                    hasError={Boolean(fieldError)}
                    {...control.register(`socialLinks.${index}.url` as const)}
                  />
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => handleRemove(index, fields)}
                  >
                    Удалить
                  </Button>
                </div>
                <span className={styles.hint}>{fieldError && fieldError.message}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
