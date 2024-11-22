import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNameContext } from "../state/name/NameProvider";
import { useState } from "react";

export const UpdateName = () => {
  const { name, updateName } = useNameContext();
  const [ newName, setNewName ] = useState(name);

  return (
    <View>
      <Text>Enter New Name Here</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewName}
        value={newName}
      />
      <Button onPress={() => updateName(newName)} title="Save New Name" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});