export const RegistrationFormLayout = ({
	onSubmit,
	updateState,
	email,
	password,
	repeatPassword,
	isPasswordCorrect,
	error,
	onPasswordChange,
	submitRef,
}) => (
	<>
		<div>Регистрация</div>
		<div>{error}</div>
		<form onSubmit={onSubmit}>
			<input
				type="email"
				value={email}
				onChange={({ target }) => updateState('email', target.value)}
			/>
			<input
				name="password"
				type="password"
				value={password}
				onChange={onPasswordChange}
			/>
			<input
				name="repeatPassword"
				type="password"
				value={repeatPassword}
				onChange={onPasswordChange}
			/>
			<button ref={submitRef} type="submit" disabled={!email || !password || error}>
				Зарегистрироваться
			</button>
		</form>
	</>
);
