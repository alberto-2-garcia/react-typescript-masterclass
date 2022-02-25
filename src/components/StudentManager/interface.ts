import { GeneratedIdentifierFlags } from "typescript";

export interface StudentManagerProps {}

export interface StudentManagerState {
  name: string;
  grade: any;
  hasError: InputError;
}

export interface InputError {
  name: boolean,
  grade: boolean
}
