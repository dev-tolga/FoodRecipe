import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.stringify(value);
  } catch (e) {
    console.log(e);
  }
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const setFavoriteItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const getFavoriteItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.stringify(value);
  } catch (e) {
    console.log(e);
  }
};

export const deleteFavoriteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
