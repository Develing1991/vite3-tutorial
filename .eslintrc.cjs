/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error', //'off' or 'warn' or 'error' 로그레벨 정의
			{
				singleQuote: true, //  "" -> ''
				semi: true, // alert('1') -> alert('1');
				useTabs: true, //공백 대신 탭을 사용해서 들여 씀
				tabWidth: 2, //탭 간격( 공백 수2 )
				printWidth: 80, //80칸이 넘어가면 개행
				bracketSpacing: true, //{foo: bar} -> { foo: bar }
				arrowParens: 'avoid', // always : (x) => x, avoid : x => x
				trailingComma: 'all', //객체에서 후행 쉼표 사용
				vueIndentScriptAndStyle: true, // 스타일, 스크립트 인덴팅 자동정렬
			},
		],
	},
};
