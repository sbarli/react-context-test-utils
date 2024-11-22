import { mock } from 'jest-mock-extended';
import { ExampleContext, IExampleContext } from "../../state/example/ExampleProvider";
import { IContextDefaults } from "./renderWithProviders.types";
import { createMockProvider } from './createMockProvider';
import { PropsWithChildren } from 'react';
import { ReduceProviders } from '../../state/ReduceProviders';

export const contextDefaults = (): IContextDefaults => ({
  exampleContext: mock<IExampleContext>({
    name: 'FirstName LastName',
    updateName: jest.fn(),
  }),
});

/**
 * This Wrapper can be passed to the Wrapper option of @testing-library/react
 * it will wrap the component in all the providers necessary to set up your test
 * It is mainly used with the renderWithProviders option
 *
 * @param context the list of context defaults for each provider
 */
export const Wrapper = (context: IContextDefaults) => ({ children }: PropsWithChildren) => {
  const contextProviders = [
    createMockProvider(ExampleContext, context.exampleContext as IExampleContext, 'ExampleContext'),
  ];

    // <Router>
    // </Router>
  return (
      <ReduceProviders mockProviders={contextProviders}>
        {children}
      </ReduceProviders>
  );
};