import React from "react";
import { ScrollView, StyleSheet, Linking } from "react-native";

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
        {finalData.length > 0
          ? finalData.map((card, index) => {
              return (
                <Card
                  key={index}
                  image={card.urlToImage}
                  title={card.title}
                  onPress={this.openLink.bind(this, card.url)}
                />
              );
            })
          : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});

export default App;
