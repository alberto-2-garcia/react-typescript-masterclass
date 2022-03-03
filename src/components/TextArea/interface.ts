export interface TextAreaProps {
  value: string;
  labelText: string;
  name: string;
  hasError: boolean;
  onChange(event: any): void;
}