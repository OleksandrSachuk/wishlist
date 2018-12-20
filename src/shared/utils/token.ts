const token: string = 'token';

const isToken = (): boolean => !!localStorage.getItem(token);

const getToken = (): string | null => localStorage.getItem(token);

const setToken = (value: string): void => localStorage.setItem(token, value);

const removeToken = (): void => localStorage.removeItem(token);

export {getToken, isToken, removeToken, setToken};
