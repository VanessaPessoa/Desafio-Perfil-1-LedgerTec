const STORAGE_KEY  = false

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

const login = bool => localStorage.setItem(STORAGE_KEY, bool );
const logout = () => localStorage.removeItem(STORAGE_KEY);

export{logout, login, isLogged}