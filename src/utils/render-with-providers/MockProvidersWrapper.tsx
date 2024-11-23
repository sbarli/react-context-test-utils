import { NameContext, INameContext } from "@/state/name/NameProvider";
import { IContextDefaults } from "@/types/renderWithProviders.types";
import { PropsWithChildren } from 'react';
import { ReduceProviders } from '@/state/ReduceProviders';
import { ThemeProvider } from '@react-navigation/native';

function createMockProvider<
  C extends React.Context<S>,
  S = C extends React.Context<infer T> ? T : never
>(Context: C, state: S, name: string) {
  const mockProvider = ({ children }: React.PropsWithChildren) => (
    <Context.Provider value={state}>{children}</Context.Provider>
  );

  Object.defineProperty(mockProvider, 'name', { value: name }); // overrides readonly name property from Function prototype for comparison

  return mockProvider;
}

/**
 * This Wrapper can be passed to the Wrapper option of @testing-library/react
 * it will wrap the component in all the providers necessary to set up your test
 * It is mainly used with the renderWithProviders option
 *
 * @param context the list of context defaults for each provider
 * @note can add any other global / 3rd-party provider mocks here in addition to the React Context API mocks
 */
export const MockProvidersWrapper = (context: IContextDefaults) => ({ children }: PropsWithChildren) => {
  const mockProviders = [
    ThemeProvider,
    createMockProvider(NameContext, context.nameContext as INameContext, 'NameContext'),
  ];

  // NOTE: when `mockProviders` is passed to `ReduceProviders` it is used as the SoT for provider list, ignoreing all "real" providers
  return (
      <ReduceProviders mockProviders={mockProviders}>
        {children}
      </ReduceProviders>
  );
};