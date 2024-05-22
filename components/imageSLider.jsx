import React from 'react';
import { View, Text } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderImages } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ImageSlider = () => {

  const renderCarouselItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={{ width: wp(100)-70, height:hp(25) }}>
        <ParallaxImage
          source={item}
          containerStyle={{ borderRadius: 35, flex: 1 }}
          style={{ resizeMode: 'contain' }}
          parallaxFactor={1}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoplay={true}
      renderItem={renderCarouselItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      itemWidth={wp(100)-70}
      autoplayInterval={4000}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  )
};

export default ImageSlider;
