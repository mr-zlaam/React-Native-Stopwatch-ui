import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Linking,
  ScrollView,
} from "react-native";

const NetflixCard = () => {
  return (
    <View style={styles.fullbg}>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.netflix}>Netflix Card</Text>
          <View style={styles.textBox}>
            <Image
              style={styles.hero}
              source={require("../../assets/teacher.jpg")}
            />
            <Text style={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              corrupti esse earum placeat tempora corporis dolorum, distinctio
              rem deleniti ipsam repellendus autem accusamus labore facere at
              dolores eaque nulla exercitationem.
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://youtube.com/shorts/Kt-W0HkXxa8?feature=share"
                );
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Watch now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    padding: 20,
    textAlign: "justify",
    width: 300,
    color: "white",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    backgroundColor: "#2b2b28",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    height: 350,
  },
  netflix: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontVariant: ["small-caps"],
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    width: 200,
    marginHorizontal: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  fullbg: {
    flex: 1,
    backgroundColor: "darkblue",
    width: 600,
  },
});

export default NetflixCard;
