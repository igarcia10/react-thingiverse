import { createContext } from "react";

interface AuthContextInterface {
    bearer: string,
    login: Function
    logout: Function,
    isLoading: boolean
    setLoading: Function
}
const defaultAuthContext: AuthContextInterface = {
    bearer: '',
    login: () => { },
    logout: () => { },
    isLoading: false,
    setLoading: () => { }
}

export default createContext<AuthContextInterface>(defaultAuthContext);