import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <button className='switch'
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
            {themeMode === "light" ? "Go Dark" : "Light Up"}
        </button>
    )
}

export default ThemeToggler;