import { CloseButton, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export interface FormValues {
  email: string;
  termsOfService: boolean;
  defaultValue: string;
}

export function ClearableInput({
  form,
  label,
  inputName,
  withAsterisk,
  placeHolder,
  type,
}: {
  form: UseFormReturnType<Record<string, string>>;
  label: string;
  inputName: string;
  withAsterisk?: boolean;
  placeHolder?: string;
  type?: string;
}) {
  return (
    <>
      <TextInput
        withAsterisk={withAsterisk}
        placeholder={placeHolder ?? ''}
        label={label}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => {
              form.setFieldValue(inputName, '');
            }}
            style={{ display: form.getInputProps(inputName).value ? undefined : 'none' }}
          />
        }
        {...form.getInputProps(inputName)}
      />
    </>
  );
}
