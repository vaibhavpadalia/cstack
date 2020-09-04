/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Text, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const App = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState({ label: "-", value: "null" });
  const [toCurrency, setToCurrency] = useState({ label: "-", value: "null" });
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    callApi = async () => {
      const url = "http://192.168.0.107:4400/api/v1/getExchangeRates";
      let exchangeData = await callRemoteMethodAsync(url);
      if (exchangeData?.responseCode == 200) {
        setLabelAndValue(exchangeData.result);
      }
    };
    callApi();
  }, []);

  /**
   * @description Set values for dropdown
   */

  const setLabelAndValue = (exchangeData) => {
    exchangeData = exchangeData.map((item) => {
      return {
        label: item.country_code,
        value: item.exchange_rate
      };
    });
    exchangeData.unshift({ label: "-", value: "null", disabled: true });
    setExchangeData(exchangeData);
  };

  /**
   * @description This function is used to make API calls
   */

  const callRemoteMethodAsync = async (url, method = "GET") => {
    try {
      let response = await fetch(url, method);
      let jsonRes = await response.json();
      return jsonRes;
    } catch (e) {
      alert("Error occurred: " + e.message);
    }
  };

  /**
   * @description Sets data for picker
   */

  const setPickerData = (value, item) => {
    if (value == 0) {
      setFromCurrency(item);
    } else {
      setToCurrency(item);
    }
  };

  /**
   * @description Converts the amount entered
   */

  const convertAmount = () => {
    if (fromCurrency != "null" && toCurrency != "null" && fromCurrency != toCurrency) {
      let aggregateAmount = enteredAmount / fromCurrency;
      let finalAmount = toCurrency * aggregateAmount;
      setConvertedAmount(finalAmount);
      alert("Value converted");
    } else {
      alert("Currencies cannot be same or left blank.");
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
              items={exchangeData}
              placeholder={{}}
              onValueChange={(item) => setPickerData(0, item)}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setEnteredAmount(text)}
              keyboardType={"number-pad"}
              value={enteredAmount.toString()}
              placeholder={"Enter Amount"}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
              placeholder={{}}
              items={exchangeData}
              onValueChange={(item) => setPickerData(1, item)}
            />
            <TextInput
              keyboardType={"number-pad"}
              value={convertedAmount.toString()}
              onChangeText={(text) => setConvertedAmount(text)}
              placeholder={"Converted Amount"}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity style={styles.convertContainer} onPress={() => convertAmount()}>
            <Text style={styles.convertText}>{"Convert"}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  container: {
    alignSelf: "center",
    marginTop: 30
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: Dimensions.get("window").width * 0.75
  },
  convertContainer: {
    marginTop: 30,
    backgroundColor: "cyan",
    alignSelf: "center",
    borderRadius: 10
  },
  convertText: {
    padding: 10,
    textAlign: "center"
  }
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 13,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    color: "black"
  },
  inputAndroid: {
    fontSize: 13,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    color: "black"
  },
  iconContainer: {
    marginTop: 30,
    marginRight: 20,
    alignItems: "center"
  }
});

export default App;
