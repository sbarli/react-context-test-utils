import { render as rtlRender, renderHook } from '@testing-library/react-native';

import { IContextDefaults, IRenderWithProvidersOptions } from '@/types/renderWithProviders.types';
import { mergeDeep } from '../mergeDeep';
import { contextDefaults } from './contextDefaults';
import { MockProvidersWrapper } from './MockProvidersWrapper';

export const providerWrapper = (options: IRenderWithProvidersOptions = {}) => {
  const { context: overrides = {}, mergeDefaultValues } = options;
  const defaults = contextDefaults();

  // jest-mock-extended creates a Proxy object that will mock methods as they are called
  // to preserve this mutate/assign directly to contextDefaults instead of returning a new object

  if (mergeDefaultValues) {
    // performs a deep merge to take advantaged of default context / redux values;
    mergeDeep(defaults, overrides);
  } else {
    Object.keys(overrides).forEach((k) => {
      Object.assign(defaults[k as unknown as keyof IContextDefaults], overrides[k as unknown as keyof IContextDefaults]);
    });
  }

  return { wrapper: MockProvidersWrapper(defaults), contextWithDefaults: defaults };
};

/**
 * Test helper to wrap your components in the providers used by the front end
 *
 * @param ui the react component you wish to test
 * @param options options for function
 * context is used to override provider setup
 * other options are passed through to @testing-library/react render()
 */
export const renderWithProviders = (
  ui: React.ReactElement,
  options: IRenderWithProvidersOptions = {}
) => {
  const { wrapper, contextWithDefaults } = providerWrapper(options);
  const result = rtlRender(ui, { wrapper, ...options });
  return { ...result, context: contextWithDefaults };
};

/**
 * Test helper to wrap your hooks in the providers used by the front end
 *
 * @param hookToTest the hook you wish to test
 * @param options options for function
 * context is used to override provider setup
 * other options are passed through to @testing-library/react-hooks renderHook()
 */
export const renderHookWithProviders = <P extends any = any, R extends any = any>(
  hookToTest: (props: R) => any,
  options: IRenderWithProvidersOptions = {}
) => {
  const { wrapper, contextWithDefaults } = providerWrapper(options);
  const result = renderHook<P, R>(hookToTest, { wrapper, ...options });
  return { ...result, context: contextWithDefaults };
};
