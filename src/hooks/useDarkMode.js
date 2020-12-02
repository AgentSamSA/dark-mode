import useLocalStorage from "./useLocalStorage";

const useDarkMode = (darkModeToggle) => {
    const [values, setValues] = useLocalStorage("dark", darkModeToggle);

    return [values, setValues];
}