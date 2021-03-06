import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import DefaultTag from "../components/DefaultTag";
import TagHeader from "../components/TagHeader";

import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import HomeButton from "../components/HomeButton";

export default function TagOptionScreen(props) {
    const { onPress, style, navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.tagArea}>
                <TagHeader />
                <ScrollView style={styles.tagBody}>
                    <DefaultTag />
                    <DefaultTag />
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionTyping}>
                            <View style={styles.optionsArrow}>
                                <View style={styles.optionsArrowIcon}>
                                    <Entypo name="triangle-right" size={24} color="#ec1a66" />
                                </View>
                            </View>
                            <View style={styles.optionTypingBox}>
                                <Text style={styles.optionTypingText}>そのまま入力する</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionPast}>
                            <View style={styles.optionsArrow}>
                                <View style={styles.optionsArrowIcon}>
                                    <Entypo name="triangle-right" size={24} color="#ec1a66" />
                                </View>
                            </View>
                            <View style={styles.optionPastBox}>
                                <Text style={styles.optionPastText}>過去のタグから選ぶ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionDelete}>
                            <View style={styles.optionsArrow}>
                                <View style={styles.optionsArrowIcon}>
                                    <Entypo name="triangle-right" size={24} color="#ec1a66" />
                                </View>
                            </View>
                            <View style={styles.optionDeleteBox}>
                                <Text style={styles.optionDeleteText}>このタグを消去する</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                    <DefaultTag />
                </ScrollView>
            </View>
            <View style={styles.tagFooter}>
                <HomeButton
                    onPress={() => { navigation.navigate("HomeScreen");} }
                />
                <CheckButton
                    onPress={ () => { navigation.navigate("TagMainScreen");} }
                />
            </View>
            <ResumeButton
                onPress= { () => { navigation.navigate("TimerSampleScreen"); }} 
            />
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
        padding: "4.5%",
        height: "88%",
    },
    tagBody: {
        height: "115%",
        marginTop: "5.7%",
    },
    tagFooter: {
        height: "12%",
        backgroundColor: "#EC1A66",
        justifyContent:"center",
    },
    homeButton: {
        position: "absolute",
        justifyContent:"center",
        left:"15%",
    },
    editButton: {
        position: "absolute",
        justifyContent:"center",
        right:"15%",
    },
    resumeButton: {
        width:"100%",
        height: "10%",
        position: "absolute",
        bottom: "8%",
        justifyContent:"center",
        alignItems: "center"
    },
    whiteCircle: {
        width: 75,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 37.5,
        elevation: 1.5,
        position: "absolute",
        bottom: 0,
        marginHorizontal: "auto"
    },
    redCircle: {
        width: 65,
        height: 65,
        backgroundColor: "#EC1A66",
        borderRadius: 32.5,
        elevation: 1.6,
        position: "absolute",
        bottom: 5,
        marginHorizontal: "auto"
    },
    rightTriangle: {
        elevation:3,
        position: "absolute",
        bottom:-3
    },
    optionsContainer: {
        position: "absolute",
        right: 0,
        top: "33.5%",
        flexDirection: "column",
        elevation:3,
        width:"68%",
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
        marginLeft: "7.5%",
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
        elevation:3,
    },
})