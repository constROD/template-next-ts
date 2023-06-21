import React from 'react';

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick, children }: React.PropsWithChildren<ButtonProps>) {
  const handleClick = () => onClick?.();
  return <button onClick={handleClick}>{children ?? label}</button>;
}
