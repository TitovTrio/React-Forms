import * as yup from 'yup';

export const passwordScheme = yup
	.string()
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
	);

export const passValidator = (pass, schema, password, repeatPassword) => {
	let errorMessage;

	try {
		schema.validateSync(pass.value);
	} catch ({ errors }) {
		errorMessage = errors.reduce((message, error) => message + error, '').trim();
	}

	if (
		(!errorMessage && pass.name === 'password' && pass.value !== repeatPassword) ||
		(!errorMessage && pass.name === 'repeatPassword' && pass.value !== password)
	) {
		errorMessage = 'Пароли должны совпадать';
	}

	return errorMessage;
};
