import React, { createContext, useCallback, useContext, useState } from 'react';

export interface INameContext {
  name: string;
  updateName(newName: string): void;
}

export const DEFAULT_NAME = 'Unknown User';

export const NameContext = createContext<INameContext>(
  {} as INameContext
);

export const useNameContext = () => useContext(NameContext);

export const NameProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [name, setName] = useState(DEFAULT_NAME);

  const updateName = useCallback((newName: string) => {
    setName(newName);
  }, []);

  return (
    <NameContext.Provider
      value={{
        name,
        updateName,
      }}
    >
      {children}
    </NameContext.Provider>
  );
};
