// ImagePick.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagePick = () => {
  const data = [
    { id: 1, img: require('../../assets/images/download.png') },
    { id: 2, img: require('../../assets/images/images.png') },
    // Add more data as needed
  ];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View className="flex h-2 overflow-auto gap-2  ">
        <Image key={item.id} source={item.img} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Use 'column' for vertical arrangement
    flexWrap: 'wrap', // Allows items to wrap to the next row
    justifyContent: 'space-between', // Adjust as needed
    padding: 5,
  },
  image: {
    width: 15,
    height: 15,
    marginBottom: 5,
  },
});

export default ImagePick;
