import { useStore } from './useStore';
import { passValidator, passwordScheme } from './passValidator';
import { useRef } from 'react';
import { RegistrationFormLayout } from './RegistrationFormLayout';

export const RegistrationForm = () => {
	const { getState, updateState, resetState } = useStore();
	const { email, password, repeatPassword, error } = getState();
	const submitRef = useRef(null);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(email, password, repeatPassword);
		resetState();
	};

	const onPasswordChange = ({ target }) => {
		const errorText = passValidator(target, passwordScheme, password, repeatPassword);
		updateState(target.name, target.value, 'error', errorText);
		!errorText ? setTimeout(() => submitRef.current.focus(), 0) : null;
	};

	return (
		<RegistrationFormLayout
			onSubmit={onSubmit}
			updateState={updateState}
			email={email}
			password={password}
			repeatPassword={repeatPassword}
			error={error}
			submitRef={submitRef}
			onPasswordChange={onPasswordChange}
		/>
	);
};
