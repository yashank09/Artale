import React, { Component } from "react";

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroBox
} from "react-viro";

import InfoCard from "./components/InfoCard";

import fakeData from "./api/FakeData.json";

export default class HelloWorldSceneAR extends Component {
  componentWillMount() {
    let targets = {};
    fakeData.map(
      art =>
        (targets[art.id] = {
          source: { uri: art.source },
          physicalWidth: art.physicalWidth,
          orientation: art.orientation
        })
    );
    ViroARTrackingTargets.createTargets(targets);
  }

  render() {
    return (
      <ViroARScene>
        {fakeData.map((art, index) => (
          <ViroARImageMarker key={index} target={art.id}>
            <InfoCard data={art} />
          </ViroARImageMarker>
        ))}
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
