import { useState } from 'react';

const initialState = {
	email: '',
	password: '',
	repeatPassword: '',
	error: '',
};

export const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue, secondFieldName, secondFieldValue) => {
			setState({
				...state,
				[fieldName]: newValue,
				[secondFieldName]: secondFieldValue,
			});
		},
		resetState: () => {
			setState(initialState);
		},
	};
};
