import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, TouchableOpacity } from 'react-native';
import { io } from 'socket.io-client';

// 👇 Replace with your actual laptop IP address
const socket = io("http://192.168.1.78");


export default function App() {
    const lastX = useRef(0);
    const lastY = useRef(0);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                const dx = gesture.moveX - lastX.current;
                const dy = gesture.moveY - lastY.current;
                socket.emit("move", { dx, dy });
                lastX.current = gesture.moveX;
                lastY.current = gesture.moveY;
            },
            onPanResponderGrant: (e, gesture) => {
                lastX.current = gesture.moveX;
                lastY.current = gesture.moveY;
            },
        })
    ).current;

    const handleTap = () => {
        socket.emit("tap");
    };

    return (
        <View style={styles.container}>
            <View style={styles.trackpad} {...panResponder.panHandlers} />
            <TouchableOpacity style={styles.tapButton} onPress={handleTap} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    trackpad: {
        flex: 1,
        backgroundColor: "#111",
    },
    tapButton: {
        height: 100,
        backgroundColor: "#333",
    },
});
