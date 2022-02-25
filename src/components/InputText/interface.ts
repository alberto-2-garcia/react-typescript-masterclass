export interface InputTextProps {
  name: string;
  value: any;
  type: string;
  labelText: string;
  min?: any;
  max?: any;
  hasError: boolean;
  onChange(event: any): void;
}
