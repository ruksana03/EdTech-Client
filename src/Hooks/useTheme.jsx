import { useEffect, useState } from "react";

const useTheme = () => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || ("light");
        const html = document.documentElement;
        html.classList.add(currentMode);
        setMode(currentMode)
    }, [])

    const changeTheme = () => {
        const html = document.documentElement;
        if (mode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');
            localStorage.setItem("mode", "dark")
        }
        else {
            html.classList.remove('dark');
            html.classList.add('light');
            setMode('light');
            localStorage.setItem("mode", "light")
        }
    }
    return { changeTheme, mode };
};


export default useTheme;