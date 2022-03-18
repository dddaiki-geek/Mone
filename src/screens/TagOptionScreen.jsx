import React from "react";
import { View, StyleSheet, Text } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function TagOptionScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <TagHeader />
                <View style={styles.tagBody}>
                    <DefaultTag />
                    <DefaultTag />
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionTyping}>
                            <View style={styles.optionsArrow}>
                                <Text style={styles.optionsArrowIcon}>▶</Text>
                            </View>
                            <View style={styles.optionTypingBox}>
                                <Text style={styles.optionTypingText}>そのまま入力する</Text>
                            </View>
                        </View>
                        <View style={styles.optionPast}>
                            <View style={styles.optionsArrow}>
                                <Text style={styles.optionsArrowIcon}>▶</Text>
                            </View>
                            <View style={styles.optionPastBox}>
                                <Text style={styles.optionPastText}>過去のタグから選ぶ</Text>
                            </View>
                        </View>
                        <View style={styles.optionDelete}>
                            <View style={styles.optionsArrow}>
                                <Text style={styles.optionsArrowIcon}>▶</Text>
                            </View>
                            <View style={styles.optionDeleteBox}>
                                <Text style={styles.optionDeleteText}>このタグを消去する</Text>
                            </View>
                        </View>
                    </View>
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                </View>
            </View>
            <View style={styles.tagFooter}>
                <View style={styles.homeButton}>
                    <Entypo name="home" size={48} color="white" />
                </View>
                <View style={styles.editButton}>
                    <Feather name="check" size={55} color="white" />
                </View>
            </View>
            <View style={styles.resumeButton}>
                <View style={styles.whiteCircle}>

                </View>
                <View style={styles.redCircle}>

                </View>
                <View style={styles.rightTriangle}>
                    <Entypo name="triangle-right" size={75} color="white" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acb3bf',
    },
    tagArea: {
        margin: 1,
        padding: 20,
        height: 650,
    },
    tagBody: {
        height: 565,
        marginTop: 18,
    },
    optionsContainer: {
        position: "absolute",
        right: 0,
        top: 150,
        flexDirection: "column",
        elevation:3,
        width:230,
    },
    optionTyping: {
        flexDirection: "row",
        height: 60,
        marginRight: 20,
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 2.3,
        borderRadius: 20,
        borderColor: "#EC1A66",
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center",
        elevation:3,  
    },
    optionTypingBox: {
        elevation:3,
    },
    optionTypingText: {
        color: "#EC1A66",
        fontWeight:"bold",
        fontSize:15,
        elevation:3,
    },
    optionPast: {
        flexDirection: "row",
        height: 60,
        marginRight: 20,
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 2.3,
        borderRadius: 20,
        borderColor: "#EC1A66",
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center",
        elevation:3,
    },
    optionPastBox: {
        elevation:3,
    },
    optionPastText: {
        color: "#EC1A66",
        fontWeight:"bold",
        fontSize:15,
        elevation:3,
    },
    optionDelete: {
        flexDirection: "row",
        height: 60,
        marginRight: 20,
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 15,
        borderWidth: 2.3,
        borderRadius: 20,
        borderColor: "#EC1A66",
        backgroundColor: "#ffffff",
        alignItems:"center",
        justifyContent:"center",
        elevation:3,
    },
    optionDeleteBox: {
        elevation:3,
    },
    optionDeleteText: {
        color: "#EC1A66",
        fontWeight:"bold",
        fontSize:15,
        elevation:3,
    },
    optionsArrow: {
        justifyContent:"center",
        elevation:3,
    },
    optionsArrowIcon: {
        color: "#EC1A66",
        fontSize:25,
        elevation:3,
    },
    tagFooter: {
        height: 85,
        backgroundColor: "#EC1A66",
    },
    whiteCircle: {
        width: 75,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 37.5,
        elevation: 1.5,
        position: "absolute",
        bottom: 40,
        left: 157,
        marginHorizontal: "auto"
    },
    redCircle: {
        width: 65,
        height: 65,
        backgroundColor: "#EC1A66",
        borderRadius: 32.5,
        elevation: 1.6,
        position: "absolute",
        bottom: 45,
        left: 162,
        marginHorizontal: "auto"
    },
    homeButton: {
        position: "absolute",
        left:55,
        bottom: 17,
    },
    editButton: {
        position: "absolute",
        right:55,
        bottom:15
    },
    rightTriangle: {
        elevation:3,
        position: "absolute",
        left:158.5,
        bottom:38
    },
})