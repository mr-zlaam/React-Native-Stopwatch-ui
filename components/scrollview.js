import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const ChallengeFlatList = () => {
  const BestAnimes = [
    {
      name: "monster",
      protagonist: "Tenma",
      antagonist: "Johan",
      year: "2003",
    },
    {
      name: "Deathnote",
      protagonist: "Light Yagami",
      antagonist: "Kira",
      year: "2007",
    },
    {
      name: "codegeass",
      protagonist: "Lelouch Vi Britannia",
      antagonist: "Lelouch",
      year: "2003",
    },
    {
      name: "narouto",
      protagonist: "Naruto",
      antagonist: "Madara",
      year: "2011",
    },
    {
      name: "eminence in shadow",
      protagonist: "Shadow",
      antagonist: "Atomic",
      year: "2021",
    },
  ];

  return (
    <View>
      <Text style={styles.textstyle}> List of My Favourite Animes</Text>
      <FlatList
        style={styles.Liststyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={BestAnimes}
        keyExtractor={(key) => {
          return key.name;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text}> Name :{item.name}</Text>
              <Text style={styles.text}>Protagonist:{item.protagonist}</Text>
              <Text style={styles.text}>Antagonist :{item.antagonist}</Text>
              <Text style={styles.text}>Year :{item.year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Liststyle: {
    textAlign: "center",
  },
  container: {
    backgroundColor: "#2b2b28",
    margin: 20,
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  textstyle: {
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ChallengeFlatList;
