import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, PlantData } from "../constants";
import { HomeHeader, FocusedStatusBar, PlantCard } from "../components";

const Home = () => {
  const [plantData, setPlantData] = useState(PlantData);

  const handleSearch = (value) => {
    if (!value.length) return setPlantData(PlantData);

    const filteredData = PlantData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setPlantData(filteredData);
    } else {
      setPlantData(PlantData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={plantData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            renderItem={({ item }) => <PlantCard data={item} />}
          />
        </View>

        {/* bg color */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.gray }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
