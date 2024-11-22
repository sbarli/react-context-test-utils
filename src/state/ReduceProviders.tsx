import { PropsWithChildren } from "react";
import { useProviders } from "./useProviders";
import { TMockProviders } from "../utils/render-with-providers/renderWithProviders.types";

interface IReduceProvidersProps extends PropsWithChildren {
  mockProviders?: TMockProviders;
}

export const ReduceProviders = ({ children, mockProviders }: IReduceProvidersProps) => {
  const providers = mockProviders || useProviders();
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};