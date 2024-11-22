import { Text, View } from "react-native";
import { useExampleContext } from "../state/example/ExampleProvider";

export const Name = () => {
  const { name } = useExampleContext();

  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  )
};