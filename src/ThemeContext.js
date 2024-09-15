import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context with 'light' as the default value
const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    // Retrieve the theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
            return newTheme;
        });
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('bg-slate-950');
            document.body.classList.remove('bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-slate-950');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
