import * as yup from 'yup';

export const passwordScheme = yup.object().shape({
	password: yup
		.string()
		.required('Требуется ввести пароль')
		.min(8, 'Пароль должен быть длиннее 8 символов')
		.max(32, 'Пароль должен быть короче 32 символов')
		.test(
			`correct characters test`,
			`Пароль не должен содержать в себе кирилицу, и запрещенные символы("'\\/)`,
			(value) => !/.*([А-ЯЁа-яё\s"/\\'"']).*/.test(value),
		)
		.test(
			`difficulty test`,
			`Пароль должен включать в себя буквы в верхнем и нижнем регистре, цифры и специальные символы`,
			(value) =>
				!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#&!%^*]).{8,}$/.test(value),
		),
	repeatPassword: yup
		.string()
		.required('Требуется повторный ввод пароля')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
