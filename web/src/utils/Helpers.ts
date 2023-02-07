export type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;

export const isProduction = import.meta.env.MODE === 'production';

export function mergeClasses(...args: unknown[]) {
    return args.filter(Boolean).join(' ');
}
