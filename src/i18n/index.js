import {createI18n} from 'vue-i18n';
import en from './en.json'
import es from './es.json'
import zh from './zh.json'
import pt from './pt.json'
import fr from './fr.json'

const locale = window.navigator.language ? window.navigator.language.substring(0, 2) : "zh";


const i18n = createI18n({
	locale: locale, // 默认语言
	fallbackLocale: 'en', // 回退语言
	messages: {
		'en': en,
		'es': es,
		'zh': zh,
		'pt': pt,
		'fr': fr
	},
	legacy: false, // 支持 Composition API
});

export default i18n
