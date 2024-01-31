export interface HeaderType {
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    setPrimary: React.Dispatch<React.SetStateAction<string>> | undefined;
    primary: string
};