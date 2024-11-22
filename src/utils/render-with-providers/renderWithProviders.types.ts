import { RenderOptions } from '@testing-library/react-native';

import { INameContext } from '@/state/name/NameProvider';
import { DeepPartial } from '../mergeDeep';

export interface IContextDefaults {
  nameContext: INameContext;
}

export interface IRenderWithProvidersOptions extends Omit<RenderOptions, 'queries'> {
  context?: DeepPartial<IContextDefaults>;
  mergeDefaultValues?: boolean;
}

export type TMockProviders =(({ children }: any) => React.JSX.Element)[]
