import React from "react";
import {
  ScrollView,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";

import {
  url,
  urlFood,
  urlTechApplePopular,
  urlSciencePopular,
  urlTechAndroidPopular,
  urlShopping,
  urlMicrosoft,
  urlTechnology,
  urlLockheedMartin,
  urlPolitics,
  urlMovies,
  urlClothes,
  urlTravel,
  urlPlayStation,
  urlNintendo,
  urlXbox,
  urlCars,
  urlWalmart,
  urlAmazon,
  urlStartUps,
} from "./url";
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
      const resApplePopular = await axios(urlTechApplePopular);
      const resFood = await axios(urlFood);
      const resAndroidPopular = await axios(urlTechAndroidPopular);
      const resScience = await axios(urlSciencePopular);
      const resShopping = await axios(urlShopping);
      const resMicrosoft = await axios(urlMicrosoft);
      const resTechnology = await axios(urlTechnology);
      const resLockheedMartin = await axios(urlLockheedMartin);
      const resPolitics = await axios(urlPolitics);
      const resMovies = await axios(urlMovies);
      const resClothes = await axios(urlClothes);
      const resTravel = await axios(urlTravel);
      const resPlayStation = await axios(urlPlayStation);
      const resNintendo = await axios(urlNintendo);
      const resXbox = await axios(urlXbox);
      const resCars = await axios(urlCars);
      const resWalmart = await axios(urlWalmart);
      const resAmazon = await axios(urlAmazon);
      const resStartUp = await axios(urlStartUps);

      this.setState({
        data: [
          ...res.data.articles,
          ...resApplePopular.data.articles,
          ...resAndroidPopular.data.articles,
          ...resScience.data.articles,
          ...resFood.data.articles,
          ...resShopping.data.articles,
          ...resMicrosoft.data.articles,
          ...resTechnology.data.articles,
          ...resLockheedMartin.data.articles,
          ...resPolitics.data.articles,
          ...resMovies.data.articles,
          ...resClothes.data.articles,
          ...resTravel.data.articles,
          ...resPlayStation.data.articles,
          ...resNintendo.data.articles,
          ...resXbox.data.articles,
          ...resCars.data.articles,
          ...resWalmart.data.articles,
          ...resAmazon.data.articles,
          ...resStartUp.data.articles,
        ],
      });
    } catch (e) {
      throw new Error(e);
    }
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
      <ScrollView style={styles.scrollView} removeClippedSubviews={true}>
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
