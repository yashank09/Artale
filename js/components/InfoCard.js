"use strict";

import React from "react";
import { StyleSheet } from "react-native";

import { ViroFlexView, ViroText } from "react-viro";

export default function InfoCard(data) {
  return (
    <ViroFlexView
      style={styles.titleContainer}
      rotation={[-90, 0, 0]}
      position={[1, 0, 0]}
      height={0.6}
      width={1.5}
    >
      <ViroText
        style={styles.prodTitleText}
        text={`Artist : ${data.artist}`}
        height={0.2}
        width={1.8}
        textClipMode="ClipToBounds"
      />
      <ViroText
        text={`Title : ${data.title}`}
        height={0.2}
        width={1.6}
        style={styles.prodTitleText}
        textClipMode="ClipToBounds"
      />
    </ViroFlexView>
  );
}

var styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffffdd",
    padding: 0.2
  },
  prodTitleText: {
    fontFamily: "sans-serif-light",
    color: "#222222",
    fontSize: 10,
    textAlignVertical: "center"
  }
});
