import {createContext, useState} from 'react';
import { Children } from 'react/cjs/react.production.min';

const ThemeContext = createContext();


export const ThemeProvider= ({children})=>{

    const [theme, setTheme]=useState("dark");

    const values={ theme, setTheme};
    return <ThemeContext.Provider value={values}>{Children}</ThemeContext.Provider>
}

export default ThemeContext;