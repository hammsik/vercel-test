interface SpinnerProps {
    /** 스피너의 크기 */
    spinnerSize: 'small' | 'medium' | 'large';
    /** 스피너의 색상 */
    spinnerColor: 'gray' | 'black' | 'sky' | 'pink' | 'white';
}

export default function Spinner(
    {
        spinnerSize = 'medium',
        spinnerColor = 'sky',
    }: SpinnerProps) {
        
    return (
        <div
            className={
                `w-16 h-16 border-4 border-${spinnerColor}-300 border-t-${spinnerColor}-700 rounded-full animate-spin`
            }
        />
    );
}
