import styles from './RegistrationForm.module.css';

export const RegistrationFormLayout = ({
	error,
	register,
	handleSubmit,
	sendFormData,
}) => (
	<>
		<div className={styles.header}>Регистрация</div>
		<div className={styles.error}>{error}</div>
		<form onSubmit={handleSubmit(sendFormData)}>
			<div>
				<label>Введите E-mail: </label>
				<input name="email" type="email" {...register('email')} />
			</div>
			<div>
				<label>Введите пароль: </label>
				<input name="password" type="password" {...register('password')} />
			</div>
			<div>
				<label>Повторите пароль: </label>
				<input
					name="repeatPassword"
					type="password"
					{...register('repeatPassword')}
				/>
			</div>
			<button className={styles.button} type="submit" disabled={error}>
				Зарегистрироваться
			</button>
		</form>
	</>
);
