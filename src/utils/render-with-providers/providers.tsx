import { mock } from 'jest-mock-extended';
import { NameContext, INameContext } from "../../state/name/NameProvider";
import { IContextDefaults } from "./renderWithProviders.types";
import { createMockProvider } from './createMockProvider';
import { PropsWithChildren } from 'react';
import { ReduceProviders } from '@/state/ReduceProviders';
import { nameContextMock } from '../../__mocks__/state/nameContext';

export const contextDefaults = (): IContextDefaults => ({
  nameContext: mock<INameContext>(nameContextMock),
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
    createMockProvider(NameContext, context.nameContext as INameContext, 'NameContext'),
  ];

    // <Router>
    // </Router>
  return (
      <ReduceProviders mockProviders={contextProviders}>
        {children}
      </ReduceProviders>
  );
};