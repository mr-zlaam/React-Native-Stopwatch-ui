import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const CardDetail = (props) => {
  return (
    <View>
      <Text style={styles.textstyle}>{props.Textdata}</Text>

      <Image style={styles.imgstyle} source={props.imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },

  imgstyle: {
    width: 200,
    height: 200,
  },
});

export default CardDetail;
