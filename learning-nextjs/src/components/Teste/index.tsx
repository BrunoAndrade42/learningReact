import { ReactNode } from 'react';

interface TesteProps {
  children: ReactNode;
}

export function Teste({ children }: TesteProps) {
  return (
    <>
      <h1>Teste</h1>
      {children}
    </>
  );
}
