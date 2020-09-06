import React from "react";
import { Button } from "react-native";
import styled from "styled-components";

const Card = (props) => (
  <Container style={{ elevation: 10 }}>
    <Cover>
      <Image source={{ uri: props.image }} />
      <Title onPress={props.onPress}>{props.title}</Title>
      <Title onPress={props.onPress}>Click this text to go to site</Title>
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
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  width: 300px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.8);
`;
