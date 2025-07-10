
import React from 'react';

interface IconProps {
  className?: string;
}

export const BrainCircuitIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.993.142"/><path d="M18 5a3 3 0 1 0-5.993.142"/><path d="M12 12a3 3 0 1 0-5.993.142"/><path d="M18 12a3 3 0 1 0-5.993.142"/><path d="M12 19a3 3 0 1 0-5.993.142"/><path d="M18 19a3 3 0 1 0-5.993.142"/><path d="M12 5a3 3 0 1 0 5.993.142"/><path d="M6 5a3 3 0 1 0 5.993.142"/><path d="M12 12a3 3 0 1 0 5.993.142"/><path d="M6 12a3 3 0 1 0 5.993.142"/><path d="M12 19a3 3 0 1 0 5.993.142"/><path d="M6 19a3 3 0 1 0 5.993.142"/><path d="M9 7.5v-1"/><path d="M15 7.5v-1"/><path d="M9 14.5v-1"/><path d="M15 14.5v-1"/><path d="M9 21.5v-1"/><path d="M15 21.5v-1"/><path d="M12 7.5v-1"/><path d="M12 14.5v-1"/><path d="M12 21.5v-1"/><path d="m4.01 6.86.35-.2"/><path d="m19.64 6.86-.35-.2"/><path d="m4.01 13.86.35-.2"/><path d="m19.64 13.86-.35-.2"/><path d="m4.01 20.86.35-.2"/><path d="m19.64 20.86-.35-.2"/>
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.93 2.07 12 7l2.07-4.93M20.5 9l-4.93 2.07L20.5 13M3.5 9l4.93 2.07L3.5 13"/><path d="M9.93 21.93 12 17l2.07 4.93"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>
  </svg>
);

export const RotateCcwIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);
