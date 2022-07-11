declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_BASE_URL: string;
        }
    }
}

interface IMenuProps {
    link: string;
    headerTitle: string;
}
