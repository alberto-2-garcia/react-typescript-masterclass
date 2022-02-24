export interface InputTextProps {
  name: string;
  value: any;
  type: string;
  labelText: string;
  min?: any;
  max?: any;
  onChange(event: any): void;
}
