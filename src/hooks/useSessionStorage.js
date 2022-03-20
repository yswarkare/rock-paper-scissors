import { useEffect, useState } from 'react';

const getStoredValue = (key, initialValue = null) => {
	let storedValue = JSON.parse(sessionStorage.getItem(key));
	if (storedValue) return storedValue;
	if (initialValue instanceof Function) return initialValue();
	return initialValue;
};

const useSessionStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		return getStoredValue(key, initialValue);
	});

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};

export default useSessionStorage;
