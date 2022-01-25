import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

function Button() {
    const [theme, setTheme]= useContext(ThemeContext);
  return <div>ActiveTheme: {theme}</div>;
}

export default Button;
