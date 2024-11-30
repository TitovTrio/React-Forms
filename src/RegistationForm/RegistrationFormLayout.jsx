import styles from './RegistrationForm.module.css';

export const RegistrationFormLayout = ({
	onSubmit,
	updateState,
	email,
	password,
	repeatPassword,
	error,
	onPasswordChange,
	submitRef,
}) => (
	<div className={styles.loginForm}>
		<div className={styles.header}>Регистрация</div>
		<div className={styles.error}>{error}</div>
		<form onSubmit={onSubmit}>
			<div>
				<label>Введите E-mail: </label>
				<input
					type="email"
					value={email}
					onChange={({ target }) => updateState('email', target.value)}
				/>
			</div>
			<div>
				<label>Введите пароль: </label>
				<input
					name="password"
					type="password"
					value={password}
					onChange={onPasswordChange}
				/>
			</div>
			<div>
				<label>Повторите пароль: </label>
				<input
					name="repeatPassword"
					type="password"
					value={repeatPassword}
					onChange={onPasswordChange}
				/>
			</div>
			<button
				className={styles.button}
				ref={submitRef}
				type="submit"
				disabled={!email || !password || error}
			>
				Зарегистрироваться
			</button>
		</form>
	</div>
);
