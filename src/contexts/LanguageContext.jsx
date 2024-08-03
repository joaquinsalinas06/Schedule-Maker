import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); 

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};