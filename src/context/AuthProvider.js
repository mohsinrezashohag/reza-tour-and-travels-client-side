import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useOrders from '../hooks/useOrders';
import usePackages from '../hooks/usePackages';



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { orders, setOrders } = useOrders();
    const { packages, setPackages } = usePackages();


    return (
        <AuthContext.Provider value={{ allContext, packages, setPackages, orders, setOrders }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;