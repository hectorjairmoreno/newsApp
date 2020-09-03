import React, { useState } from "react";
import { View, Linking } from "react-native";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [data, setData] = useState([]);
  async function retrieveData() {
    try {
      const url =
        "http://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=1d02c3b288344c9db8d4d86966f8412c";

      const data = await axios(url);
      setData(data.data.articles);
    } catch (e) {
      throw new Error(e);
    }
  }

  React.useEffect(() => {
    retrieveData();
  }, []);

  function redirect(url) {
    Linking.openURL(url);
  }

  return (
    <View>
      <Container>
        <Row>
          <Col>
            {data.length > 0
              ? data.map((article, index) => {
                  return (
                    <Card
                      key={index}
                      style={{
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Card.Img variant="top" src={article.urlToImage} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={redirect.bind(this, article.url)}
                        >
                          Go to site
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
              : null}
          </Col>
        </Row>
      </Container>
    </View>
  );
}
