import React, {createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({Children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;