import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={[styles.screen]}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : results.length > 0 ? (
        <Text>We have found {results.length} results</Text>
      ) : null}

      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
  },
});

export default SearchScreen;
