import { createContext } from "react";

interface ISetLoadingFn {
    (loading: boolean): void
}

interface ILoginFn {
    (bearer: string): void
};

interface ILogoutFn {
    (): void
};

export interface IAuthContext {
    apiUrl: string,
    bearer: string,
    isLoading: boolean,
    setLoading: ISetLoadingFn,
    login: ILoginFn,
    logout: ILogoutFn
};

export const AuthContext: React.Context<IAuthContext> = createContext(undefined);