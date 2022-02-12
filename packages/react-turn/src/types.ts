import type { ReactNode } from 'react';

export interface TurnContainerProps {
  /**
   * 设置硬件加速模式，对于触摸设备，此值必须为 true。
   * @default true
   */
  acceleration?: boolean;
  autoCenter?: boolean;
  display?: 'single' | 'double';
  duration?: number;
  gradients?: boolean;
  height?: number;
  width?: number;
  inclination?: number;
  page?: number;
  pages?: number;
  children?: ReactNode;
  onEnd?: () => void;
  onFirst?: () => void;
  onLast?: () => void;
  onMissing?: () => void;
  onStart?: () => void;
  onTurning?: () => void;
  onTurned?: () => void;
  onZooming?: () => void;
}

export interface TurnPageProps {
  children?: ReactNode;
}
