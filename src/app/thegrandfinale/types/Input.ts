export interface InputFieldProps {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  icon?: React.ReactNode;
  required?: boolean;
}
