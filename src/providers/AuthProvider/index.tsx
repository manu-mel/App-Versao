import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';

interface AuthData {
  user: string;
  password: string;
}
interface AuthContextData {
  authData?: AuthData;
  signIn: (user: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();

  async function signIn(user: string, password: string) {
    try {
      // const body = JSON.stringify({
      //   username: user,
      //   password: password,
      // });

      // const response = await api.post('/auth/login', body);
      // const data = response.data;
      if (user === 'a' && password === 'a') {
        const data = { user, password };
        setAuthData(data);
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  return (
    <AuthContext.Provider value={{ authData, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
