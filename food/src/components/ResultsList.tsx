import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import ListItem from "./ListItem";

const ResultsList = ({ results, title }) => {
  return (
    <View style={[styles.wrapper]}>
      <Text style={[styles.title]}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ListItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 24,
    marginLeft: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default ResultsList;
