import { useExampleContext } from "../state/example/ExampleProvider";

interface IUseGreeting {
  greeting: string;
}

export const useGreeting = (): IUseGreeting => {
  const { name } = useExampleContext();
  return {
    greeting: `Hello, ${name}`
  }
};