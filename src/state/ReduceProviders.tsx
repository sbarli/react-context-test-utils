import { PropsWithChildren } from "react";
import { useProviders } from "./useProviders";
import { TMockProviders } from "@/types/renderWithProviders.types";
import { TTheme } from "@/types/theme.types";

interface IReduceProvidersProps extends PropsWithChildren {
  mockProviders?: TMockProviders;
  theme?: TTheme;
}

export const ReduceProviders = ({ children, mockProviders, theme }: IReduceProvidersProps) => {
  const providers = mockProviders || useProviders({ theme });
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};