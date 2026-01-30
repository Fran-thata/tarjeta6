import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  primary?: boolean;
}

export interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export enum BookingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}