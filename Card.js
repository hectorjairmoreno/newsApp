import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components";

const Card = (props) => (
  <Container style={{ elevation: 10 }}>
    <Cover>
      <Image source={{ uri: props.image }} />
      <View style={styles.child}>
        <TitleUp>Click image to see more</TitleUp>
        <Title onPress={props.onPress}>{props.title}</Title>
      </View>
    </Cover>
  </Container>
);

export default Card;

const Container = styled.View`
  background: black;
  width: 95%;
  height: 280px;
  border-radius: 14px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Cover = styled.View`
  width: 100%;
  height: 280px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  background: black;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  width: 85%;
  height: 100%;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.8);
`;

const TitleUp = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.8);
`;

const styles = StyleSheet.create({
  child: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
