import { createContext, useContext, useEffect } from 'react';
import useSessionStorage from './useSessionStorage';

const inititalState = {
	player1: {
		type: 'Computer',
	},
	player2: {
		type: 'Computer',
	},
	player1Move: {
		name: 'Paper',
		icon: 'paper-down',
	},
	winner: "",
	player2Move: {},
	currentPage: 'Select_Players',
};

const ContextState = createContext(inititalState);

export const useContextState = () => {
	return useContext(ContextState);
};

const UpdateContextState = createContext(() => {});

export const useUpdateContextState = () => {
	return useContext(UpdateContextState);
};

export const ContextStateProvider = ({ children }) => {
	const [contextState, setContextState] = useSessionStorage('context-state', inititalState);

	useEffect(() => {
		console.log({ contextState });
	}, [contextState]);

	const updateContextState = (prop, value) => {
		setContextState((prevState) => ({ ...prevState, [prop]: value }));
	};

	return (
		<ContextState.Provider value={contextState}>
			<UpdateContextState.Provider value={updateContextState}>
				{children}
			</UpdateContextState.Provider>
		</ContextState.Provider>
	);
};
