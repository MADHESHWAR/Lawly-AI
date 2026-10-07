import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('lawly_user');
      return stored ? JSON.parse(stored) : {
        id: 'usr-1',
        name: 'Priya Sharma',
        email: 'priya.sharma@example.in',
        role: 'citizen',
        state: 'Tamil Nadu'
      };
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('lawly_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('lawly_user');
    }
  }, [user]);

  const login = (email, password, role = 'citizen') => {
    const isSpecialAdmin = email.toLowerCase().includes('admin') || role === 'admin';
    const newUser = {
      id: isSpecialAdmin ? 'admin-1' : `usr-${Date.now()}`,
      name: isSpecialAdmin ? 'Adv. Rajesh Kumar (Knowledge Lead)' : email.split('@')[0],
      email: email,
      role: isSpecialAdmin ? 'admin' : 'citizen',
      state: 'Maharashtra'
    };
    setUser(newUser);
    return newUser;
  };

  const loginAsDemoCitizen = () => {
    const demoUser = {
      id: 'demo-citizen-1',
      name: 'Priya Sharma',
      email: 'priya.sharma@example.in',
      role: 'citizen',
      state: 'Tamil Nadu'
    };
    setUser(demoUser);
    return demoUser;
  };

  const loginAsDemoAdmin = () => {
    const demoAdmin = {
      id: 'demo-admin-1',
      name: 'Adv. Rajesh Kumar (Knowledge Admin)',
      email: 'admin@lawly.in',
      role: 'admin',
      state: 'Delhi (NCT)'
    };
    setUser(demoAdmin);
    return demoAdmin;
  };

  const register = (name, email, password, state = 'Maharashtra') => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name: name,
      email: email,
      role: 'citizen',
      state: state
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
      login,
      loginAsDemoCitizen,
      loginAsDemoAdmin,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
