import React, { createContext, useCallback, useContext, useState } from 'react';

export interface IExampleContext {
  name: string;
  updateName(newName: string): void;
}

export const ExampleContext = createContext<IExampleContext>(
  {} as IExampleContext
);

export const useExampleContext = () => useContext(ExampleContext);

export const ExampleProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [name, setName] = useState('');

  const updateName = useCallback((newName: string) => {
    setName(newName);
  }, []);

  return (
    <ExampleContext.Provider
      value={{
        name,
        updateName,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};
