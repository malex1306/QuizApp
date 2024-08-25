import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, View } from 'react-native';

export default function GlowingButton({ label, onPress }) {
  const [glowAnim] = useState(new Animated.Value(1));

  const startGlow = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={startGlow}
        onPressOut={() => glowAnim.stopAnimation(() => glowAnim.setValue(1))}
        onPress={onPress}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.button,
            {
              transform: [{ scale: glowAnim }],
              shadowRadius: glowAnim.interpolate({
                inputRange: [1, 1.5],
                outputRange: [10, 20],
              }),
            },
          ]}
        >
          <Text style={[styles.buttonText]} numberOfLines={2} ellipsizeMode="tail">
          {label}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#00f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#00f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});