import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HomeButton (props) {
    const { style, onPress } = props;
    return (
        <TouchableOpacity 
            style={[ styles.homeButton, style ]}
            onPress={ onPress }
        >
            <Entypo name="home" size={32} color="#EC1A66" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    homeButton: {
        position: "absolute",
        justifyContent:"center",
        left:"17%",
    },
})