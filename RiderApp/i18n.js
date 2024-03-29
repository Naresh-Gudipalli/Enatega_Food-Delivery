import * as Localization from 'expo-localization'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from 'react-native'
import i18n from 'i18n-js'
import { en } from './languages/en'
import { fr } from './languages/fr'
import { km } from './languages/km'
import { zh } from './languages/zh'
import { de } from './languages/de'
import { ar } from './languages/ar'

i18n.initAsync = async () => {
  i18n.fallbacks = true
  i18n.translations = { fr, en, km, zh, de, ar }
  // i18n.locale = 'km'
  if (Platform.OS === 'android') {
    const lang = await AsyncStorage.getItem('enatega-language')
    i18n.locale = lang || 'en'
  } else {
    i18n.locale = Localization.locale
  }
}

export default i18n
