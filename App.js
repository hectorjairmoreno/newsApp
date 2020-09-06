import React from "react";
import {
  ScrollView,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";

import { url } from "./url";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await axios(url);
      this.setState({ data: res.data.articles });
    } catch (e) {}
  }

  openLink = (url) => {
    Linking.openURL(url);
  };

  render() {
    const { data } = this.state;
    const finalData = data.filter((d) => {
      if (d.urlToImage) return d.urlToImage;
    });
    return (
      <ScrollView style={styles.scrollView}>
        {finalData.length > 0 ? (
          finalData.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.urlToImage}
                title={card.title}
                onPress={this.openLink.bind(this, card.url)}
              />
            );
          })
        ) : (
          <Container>
            <ActivityIndicator size="large" color="#03396c" />
            <Title>Loading News...</Title>
          </Container>
        )}
      </ScrollView>
    );
  }
}

const Container = styled.View`
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  flex: 1;
  display: flex;
  margin-top: 400px;
`;

const Title = styled.Text`
  color: black;
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.8);
`;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;
