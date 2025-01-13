import {useRouter} from "expo-router";
import {Button, StyleSheet, TextInput} from 'react-native';
import { Text, View } from '@/components/Themed';
import {KeyboardAwareScrollView} from "react-native-keyboard-controller";

const MyTestInput = () => {
  return(<View style={styles.card}>
    <Text style={styles.title}>Modal 2</Text>
    <TextInput style={styles.input} placeholder="Type something" />
  </View>);
};

export default function Modal2Screen() {
  const router = useRouter();

  return (
      <KeyboardAwareScrollView bottomOffset={62}>
        <MyTestInput />
        <MyTestInput />
        <MyTestInput />
        <MyTestInput />
        <MyTestInput />
        <MyTestInput />
        <MyTestInput />
      </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
});
