import { useNameContext } from "../state/name/NameProvider";

interface IUseGreeting {
  greeting: string;
}

export const useGreeting = (): IUseGreeting => {
  const { name } = useNameContext();
  return {
    greeting: `Hello, ${name}!`
  }
};