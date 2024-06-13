import { Ref, ref } from "vue";

type available = 'light' | 'dark' | 'code';
const currentTheme: Ref<available> = ref('code');

type themeData = { text: string; bg: string; border: string; }
const currentThemeData: Ref<themeData> = ref(getTheme());

function changeTheme(theme: available) {
	currentTheme.value = theme;
	currentThemeData.value = getTheme();
	return currentThemeData.value;
};

function getTheme(): themeData {
	switch (currentTheme.value) {
		case 'light':
			return {
				text: '000',
				bg: 'fff',
				border: "000"
			};
		case 'dark':
			return {
				text: 'fff',
				bg: '000',
				border: "fff"
			};
		case 'code':
			return {
				text: '0f0',
				bg: '000',
				border: "0f0"
			};
	}
};

export type { available, themeData };
export { changeTheme, currentThemeData };
export default currentTheme;