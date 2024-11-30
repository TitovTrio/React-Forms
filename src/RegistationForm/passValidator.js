export const passValidator = (pass, password, repeatPassword, submitRef) => {
	let error;

	if (pass.value === '') {
		error = '';
	} else if (/.*([А-ЯЁа-яё\s"/\\'"']).*/.test(pass.value)) {
		error = `Пароль не должен содержать в себе кирилицу, и запрещенные символы("'\\/)`;
	} else if (pass.value.length < 8) {
		error = 'Пароль должен быть длиннее 8 символов';
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#&!%^*]).{8,}$/.test(pass.value)
	) {
		error =
			'Пароль должен включать в себя буквы в верхнем и нижнем регистре, цифры и специальные символы';
	} else if (pass.value.length > 32) {
		error = 'Пароль должен быть короче 32 символов';
	} else if (
		(pass.name === 'password' && pass.value !== repeatPassword) ||
		(pass.name === 'repeatPassword' && pass.value !== password)
	) {
		error = 'Пароли должны совпадать';
	} else {
		setTimeout(() => submitRef.current.focus(), 0);
	}

	return error;
};
