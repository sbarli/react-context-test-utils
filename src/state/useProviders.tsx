import { PropsWithChildren, useMemo } from "react";
import { NameProvider } from "./name/NameProvider";
import { DefaultTheme, ThemeProvider, DarkTheme } from "@react-navigation/native";
import { TTheme } from "../types/theme";

interface IUseProvidersProps {
  theme?: TTheme;
}

export const useProviders = ({ theme }: IUseProvidersProps = {}) => {
  const ThemedProvider = useMemo(() => ({ children }: PropsWithChildren) => {
    return <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
  }, [theme]);
  return [
    ThemedProvider,
    NameProvider,
  ];
};