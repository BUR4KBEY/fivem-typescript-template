import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';

import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { Dispatch, isProduction } from '../utils/Helpers';

interface NuiData {
    name: string;
}

interface MainContextType {
    show: boolean;
    setShow: Dispatch<boolean>;

    name: string;
}

const MainContext = createContext<MainContextType>(null!);

const defaultValues = {
    name: 'BUR4KBEY'
};

export function MainProvider({ children }: { children: ReactNode }) {
    const [show, setShow] = useState(!isProduction);
    const [name, setName] = useState(defaultValues.name);

    if (isProduction) {
        useNuiEvent<NuiData>('show-ui', data => {
            setName(data.name);
            setShow(true);
        });
    }

    useEffect(() => {
        if (!show && isProduction) {
            fetchNui('close-ui');
            setName(defaultValues.name);
        }
    }, [show]);

    const value: MainContextType = { show, setShow, name };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
}

export function useMain() {
    return useContext(MainContext);
}
