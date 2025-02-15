import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = {API_KEY};

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude)=>{
    const {data: 
      {
        main: { temp },
        weather: [{main}],
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    this.setState({ 
      isLoading:false,
      temp,
      conditions:main,
    });
  }
  getLocation = async ()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      // send to API
    } catch (error) {
      console.log(error)
      Alert.alert("Can't find you")
    }
    
  }

  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading, temp, conditions} = this.state;
    
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} conditions={conditions}/>;
  }
}

