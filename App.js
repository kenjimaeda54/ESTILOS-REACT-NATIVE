import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.textoprincipal, styles.alinhaTexto]}>Texto 1</Text>
        <Text sytle={styles.alinhaTexto}>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text style={styles.upercase}>Texto 4 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoprincipal: {
    margin: 40,
  },
  alinhaTexto: {
    textAlign: "center",
    color: "#CD853F",
  },
  upercase: {
    fontSize: 30,
  },
});
