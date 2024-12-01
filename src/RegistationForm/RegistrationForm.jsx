import { passwordScheme } from './passValidator';
import { RegistrationFormLayout } from './RegistrationFormLayout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const sendFormData = (formdata) => {
	console.log(formdata);
};

export const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		mode: 'onTouched',
		resolver: yupResolver(passwordScheme),
	});

	const error = errors.password?.message || errors.repeatPassword?.message;

	return (
		<RegistrationFormLayout
			error={error}
			register={register}
			handleSubmit={handleSubmit}
			sendFormData={sendFormData}
		/>
	);
};
