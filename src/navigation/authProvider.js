import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            console.log('login method called');
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            // Check if the userCredential contains a user
            if (userCredential.user) {
              setUser(userCredential.user); // Set the user in context
              return true; // Successful login
            } else {
              Alert.alert('Login Error', 'Incorrect email or password.');
              return false; // Unsuccessful login
            }
          } catch (e) {
            console.log(e);
            Alert.alert(e.message);
            return false; // Unsuccessful login
          }
        },
        register: async (email, password, name) => {
          try {
            const response = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            const user = response.user;
            await user.updateProfile({ displayName: name });
            return true;
          } catch (e) {
            console.log(e);
            Alert.alert(e.message);
            return false;
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
}