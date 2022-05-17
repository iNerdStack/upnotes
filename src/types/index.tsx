import React, { InputHTMLAttributes } from 'react';

// interface to declare all our prop types
export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    color?: string, // default, primary, info, success, warning, danger, dark
    size?: string, // sm, md, lg
    disabled?: boolean,
    type?: string,
    shadow?: boolean,
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label: string;
  dense?: boolean;
}

export interface InputTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label: string;
  dense?: boolean;
}

export interface InputSelectProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label: string;
  options: Array<string>;
  dense?: boolean;
}