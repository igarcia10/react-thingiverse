import { createContext } from "react";

interface ILoginFn {
    (bearer: string): void
};
interface ILogoutFn {
    (): void
};

export interface IAuthContextState {
    apiUrl: string,
    bearer: string,
    login: ILoginFn,
    logout: ILogoutFn,
    loading: boolean,
    setLoading: Function
};

export const AuthContext: React.Context<IAuthContextState> = createContext(undefined);