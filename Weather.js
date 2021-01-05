import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        subtitle: "Stay home!"
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#373B44", "#4286f4"],
        subtitle: "Stay home!"
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ["#373B44", "#4286f4"],
        subtitle: "Stay home!"
    },
    Snow:{
        iconName: "weather-snowy-heavy",
        gradient: ["#c0c0aa", "#1cefff"],
        subtitle: "Let it snow!"
    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#c0c0aa", "#1cefff"],
        subtitle: "Watch out!"
    },
    Smoke:{
        iconName: "weather-fog",
        gradient: ["#c0c0aa", "#1cefff"],
        subtitle: "Watch out!"
    },
    Haze:{
        iconName: "weather-hazy",
        gradient: ["#4da0b0", "#d39d38"],
        subtitle: "Watch out!"
    },
    Dust:{
        iconName: "weather-hazy",
        gradient: ["#3E5151", "#DECBA4"],
        subtitle: "Watch out!"
    },
    Fog:{
        iconName: "weather-fog",
        gradient: ["#B993D6", "#8CA6DB"],
        subtitle: "Watch out!"
    },
    Sand:{
        iconName: "weather-hazy",
        gradient: ["#3E5151", "#DECBA4"],
        subtitle: "Watch out!"
    },
    Ash:{
        iconName: "weather-hazy",
        gradient: ["#3E5151", "#DECBA4"],
        subtitle: "Watch out!"
    },
    Squall:{
        iconName: "weather-windy",
        gradient: ["#acb6e5", "#86fde8"],
        subtitle: "Stay home!"
    },
    Tornado:{
        iconName: "weather-hurricane",
        gradient: ["#acb6e5", "#86fde8"],
        subtitle: "Stay home!"
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#EDE574", "#E1F5C4"],
        subtitle: "Go outside!"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#acb6e5", "#86fde8"],
        subtitle: "Not bad!"
    },
}

const Weather = ({temp, conditions}) => {
    return (
        <LinearGradient colors={weatherOptions[conditions].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[conditions].iconName} size={96} color="#fff" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>How {conditions} day, </Text>
                <Text style={styles.subtitle}>{weatherOptions[conditions].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

export default Weather;

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    conditions: propTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 40,
        color: "#fff",
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer:{
        paddingHorizontal: 30,
        alignItems: "flex-start",
    },
    title: {
        color: "#fff",
        fontSize: 24,
    },
    subtitle: {
        color: "#fff",
        fontSize: 16,
    }
})