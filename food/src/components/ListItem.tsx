import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={[styles.card]}>
      <ImageBackground
        style={[styles.cover]}
        source={{ uri: item.image_url }}
        resizeMode="cover"
      >
        <View style={[styles.wrapper]}>
          <Text style={[styles.title]}>{item.name}</Text>
          <View style={[styles.infos_wrapper]}>
            <Text style={[styles.infos]}>{item.rating}/5</Text>
            <Text style={[styles.infos]}>{item.review_count} Reviews</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    marginLeft: 16,
  },
  cover: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  infos_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infos: {
    fontSize: 12,
    fontWeight: "400",
  },
});

export default ListItem;
