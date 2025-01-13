import {useRouter} from "expo-router";
import React from "react";
import {Button, Platform, StyleSheet, TextInput} from 'react-native';
import { Text, View } from '@/components/Themed';
import {KeyboardAwareScrollView} from "react-native-keyboard-controller";

export default function ModalScreen() {
  const router = useRouter();

  const MyTestInput = () => {
    return(<View style={styles.card}>
      <Text style={styles.title}>Modal 1</Text>
      <TextInput style={styles.input} placeholder="Type something" />
    </View>);
  };

  return (
      <>
        <Button onPress={() => router.navigate("/(modal)/modal2")} title="Go to modal 2" />

        <KeyboardAwareScrollView bottomOffset={62} >
          <MyTestInput />
          <MyTestInput />
          <MyTestInput />
          <MyTestInput />
          <MyTestInput />
          <MyTestInput />
          <MyTestInput />
        </KeyboardAwareScrollView>
      </>
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