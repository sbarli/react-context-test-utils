export function createMockProvider<
  C extends React.Context<S>,
  S = C extends React.Context<infer T> ? T : never
>(Context: C, state: S, name: string) {
  const mockProvider = ({ children }: React.PropsWithChildren) => (
    <Context.Provider value={state}>{children}</Context.Provider>
  );

  Object.defineProperty(mockProvider, 'name', { value: name }); // overrides readonly name property from Function prototype for comparison

  return mockProvider;
}