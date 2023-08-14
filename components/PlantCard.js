import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, DollarPrice, PlantTitle } from "./SubInfo";

const PlantCard = ({ data }) => {
  const navigation = useNavigation();
    const [heartPressed, setHeartPressed] = useState(false);
     const toggleHeart = () => {
       setHeartPressed(!heartPressed);
     };
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={heartPressed ? assets.heart : assets.heart_filled}
          handlePress={toggleHeart}
          right={10}
          top={10}
        />
      </View>

      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <PlantTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DollarPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default PlantCard;
