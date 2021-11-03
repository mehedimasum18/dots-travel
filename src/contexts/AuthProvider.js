import React, {  createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({Children}) => {
    const allContexts = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContexts}>
                {Children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;