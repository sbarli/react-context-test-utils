import { Name } from "@/components/Name";
import { View } from "react-native";
import { UpdateName } from "../components/UpdateName";

export const HomeScreen = () => {
  return (
    <View>
      <Name />
      <UpdateName />
    </View>
  )
};
