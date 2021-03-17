import React from "react";
import {
  ScrollView,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import data from "./data.json";
import Card from "./Card";
import styled from "styled-components";

class App extends React.Component {

  openLink = (url) => {
    Linking.openURL(url);
  };

  render() {
    
    return (
      <ScrollView style={styles.scrollView} removeClippedSubviews={true}>
        {data.articles.length > 0 ? (
          data.articles.map((card, index) => {
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
