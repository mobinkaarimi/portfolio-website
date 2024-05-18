import React from "react";

export interface textInputTypes {
  placeholder?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: React.FormEvent<HTMLInputElement> | any;
  error?: boolean | null | undefined;
  errorText?: string | null | undefined;
  className?: string;
  type: string;
  limited?: boolean;
  limitedCount?: number;
  WFull?: boolean;
  textArea?: boolean;
  textAreaLine?: number;
  direction?: string
}
