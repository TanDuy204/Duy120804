import React from "react";
import { View, StyleSheet } from "react-native";
import SectionView from "./SectionView";
import SectionView2 from "./SectionView2";

const eventInfo = [
  {
    title: "Event 3",
    description: "Description for Event 3",
    address: "Bà Nà Hill, Đà Nẵng",
    time: "09 : 00 AM - 12AM, 12/12/2024",
    car: "Xe bus",
    time2: "21 : 00 - 22 : 00",
    image:
      "http://reviewvilla.vn/wp-content/uploads/2022/06/Kinh-nghiem-di-Ba-Na-Hill-3.jpg",
  },
];

const eventInfo2 = [
  {
    name: "Mercure Danang French Village Bana Hills",
    time: "06 : 00 AM - 12 : 00 AM",
    address: "Xã Hòa Ninh - Huyện Hòa Vang - Thành phố Đà Nẵng - Việt Nam, Hòa Ninh, Đà Nẵng, Việt Nam,",
  },
];
const Bai2 = () => {
  return (
    <View style={styles.container}>
      <SectionView title="Lịch trình" data={eventInfo} />
      <SectionView2 title="Khách sạn" data={eventInfo2} />
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {},
});