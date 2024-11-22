import { RenderOptions } from '@testing-library/react-native';

import { IExampleContext } from '@/state/example/ExampleProvider';
import { DeepPartial } from '../mergeDeep';

export interface IContextDefaults {
  exampleContext: IExampleContext;
}

export interface IRenderWithProvidersOptions extends Omit<RenderOptions, 'queries'> {
  context?: DeepPartial<IContextDefaults>;
  mergeDefaultValues?: boolean;
}

export type TMockProviders =(({ children }: React.PropsWithChildren) => React.JSX.Element)[]
