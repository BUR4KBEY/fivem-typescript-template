import { useCallback, useEffect } from 'react';

import IndexPage from './components/IndexPage';
import { useMain } from './context/MainContext';
import { isProduction, mergeClasses } from './utils/Helpers';

export default function App() {
    const { show, setShow, name } = useMain();

    const keyDown = useCallback(
        (e: KeyboardEvent) => {
            const { key } = e;
            if (key === 'Escape' && show) {
                setShow(false);
            }
        },
        [show]
    );

    useEffect(() => {
        if (show) document.addEventListener('keydown', keyDown);

        return () => {
            document.removeEventListener('keydown', keyDown);
        };
    }, [show]);

    return show ? (
        <div
            className={mergeClasses(
                'flex h-screen w-screen items-center justify-center',
                isProduction ? ' select-none' : 'bg-gray-400'
            )}
        >
            <IndexPage />
        </div>
    ) : null;
}
