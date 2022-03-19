import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';

export default function TimerSampleScreen() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 0.1);
    }, 100);
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  const reset = () => {
    setCount(0);
  }
  // console.log(count);
  if (count >= 20) {
    stop();
  }

  const image = { uri: 'https://livedoor.blogimg.jp/catkat22/imgs/7/4/74e05043.jpg' }

  return (
    <View style={styles.container}>
      <View style={styles.topMargin}></View>
      <View style={styles.midMargin(count)}></View>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
      <View style={styles.timer}>
        <Text>Count={count}</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={start}
        >
          <Text>start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stopButton}
          onPress={stop}
        >
          <Text>stop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={reset}
        >
          <Text>reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.ball}></View>
        <View style={styles.bar(count)}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  topMargin: {
    backgroundColor: '#ffffff',
    height: '10%',
    zIndex: 10,
  },
  midMargin: (count) => ({
    backgroundColor: '#ffffff',
    zIndex: 10,
    height: `${80*(1-count*0.01)-2}%`,
  }),
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  timer: {
    position: 'absolute',
    zIndex: 15,
    top: '40%',
    left: '20%',
    right: '20%',
  },
  startButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  stopButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  resetButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 30,
  },
  barContainer: {
    backgroundColor: '#EC1A66',
    position: 'absolute',
    zIndex: 15,
    left: 30,
    top: '10%',
    height: '80%',
    width: 5,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: '#ffffff',
    height: 25,
    width: 25,
    borderWidth: 3,
    borderColor: '#EC1A66',
    borderRadius: 12.5,
  },
  bar: (count) => ({
    backgroundColor: '#EC1A66',
    height: `${count}%`,
    // height: '30%',
    width: '100%',
  }),
});