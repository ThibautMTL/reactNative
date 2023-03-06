import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setFocus] = useState(false);

  return (
    <View style={[styles.bar, isFocused && styles.focused]}>
      <AntDesign name="search1" size={24} color="black" style={styles.icon} />
      <TextInput
        placeholder="Search Bar"
        style={[styles.searchInput]}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    backgroundColor: "#f0eeee",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#f0eeee",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  focused: {
    borderColor: "red",
  },
  icon: {
    position: "absolute",
    left: 8,
  },
  searchInput: {
    flexGrow: 1,
    paddingLeft: 40,
    height: "100%",
    zIndex: 2,
  },
});

export default SearchBar;
