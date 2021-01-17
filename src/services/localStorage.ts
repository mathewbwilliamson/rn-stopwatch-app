import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStore = {
  storeStringValue: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      console.error(e)
    }
  },
  getStringValue: async (key: string) => {
    try {
      await AsyncStorage.getItem(key)
    } catch (e) {
      // saving error
      console.error(e)
    }
  },
}