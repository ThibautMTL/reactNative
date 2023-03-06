import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import yelp from "../api/yelp";

const DetailsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  console.log(result);

  const getDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getDetails(id);
  }, []);

  console.log(id);
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
