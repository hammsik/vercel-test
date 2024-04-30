import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import classNames from "classnames";

interface LinearProps extends React.HTMLProps<HTMLDivElement>{
    /** 스피너의 크기 */
    linearSize?: 'small' | 'medium' | 'large';
    /** 스피너의 색상 */
    linearColor?: 'gray' | 'black' | 'sky' | 'pink' | 'white';
}


/**
 * 선형 로더 컴포넌트
 */
export default function Linear(
    {
        linearSize = 'medium',
        linearColor = 'sky',
        ...props
    }: LinearProps) {

    const animeRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(animeRef.current, { x: -20 }, { x: 20, duration: 0.4, ease: 'power4.inOut', yoyo: true, repeat: -1 });
    }, []);

    return (
        <div
            ref={animeRef}
            className={
                classNames(
                    props.className,
                    'rounded-full',
                    {
                        'w-4 h-4': linearSize === 'small',
                        'w-6 h-6': linearSize === 'medium',
                        'w-8 h-8': linearSize === 'large'
                    },
                    {
                        'bg-gray-300': linearColor === 'gray',
                        'bg-black': linearColor === 'black',
                        'bg-sky-300': linearColor === 'sky',
                        'bg-pink-300': linearColor === 'pink',
                        'bg-white': linearColor === 'white'
                    }
                )
            }
        />
    );
}

// interface LinearProps {
//     /** 스피너의 크기 */
//     linearSize: 'small' | 'medium' | 'large';
//     /** 스피너의 색상 */
//     linearColor: 'gray' | 'black' | 'sky' | 'pink' | 'white';
// }

// export default function Linear(
//     {
//         linearSize = 'medium',
//         linearColor = 'sky',
//     }: LinearProps) {
        
//     return (
//         <div
//             className={
//                 `w-16 h-16 border-4 border-${linearColor}-300 border-t-${linearColor}-700 rounded-full animate-spin`
//             }
//         />
//     );
// }
