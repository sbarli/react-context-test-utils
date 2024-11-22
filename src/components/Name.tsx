import { Text, View } from "react-native";
import { useNameContext } from "../state/name/NameProvider";

export const Name = () => {
  const { name } = useNameContext();

  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  )
};