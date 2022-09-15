import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <TextInput
        placeholder="Search Bar"
        style={styles.searchInput}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default SearchBar;
