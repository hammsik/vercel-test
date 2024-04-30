import React, { useRef } from "react";
import gsap from "gsap";
import classNames from "classnames";
import Linear from "./LoadingAnime/Linear";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** 버튼의 색상 */
  color: 'gray' | 'black' | 'sky' | 'pink' | 'white';
  /** 버튼의 크기 */
  buttonSize: 'small' | 'medium' | 'large';
  /** 사용자 인터렉션이 진행되고 있는지 */
  isLoading?: boolean;
  /** 테두리선 여부 */
  outLine: boolean;
  /** 버튼의 너비를 꽉 채울지 여부 */
  isFullWidth: boolean;
  /** 버튼 클릭시 실행되는 함수 */
  buttonClick: () => void;
}

/**
 * 일반적인 버튼 컴포넌트
 */
export default function Button(
  {
    color = 'sky',
    buttonSize = 'medium',
    isLoading = false,
    outLine = false,
    buttonClick = () => console.log('Button clicked!'),
    isFullWidth = false,
    children,
    ...props
  }: ButtonProps) {
  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      disabled={isLoading}
      className={
        classNames(
          props.className,
          'flex items-center rounded-lg relative disabled:opacity-50',
          { 'w-full': isFullWidth },
          {
            'py-2 px-4 text-sm': buttonSize === 'small',
            'py-4 px-8 text-base': buttonSize === 'medium',
            'py-6 px-12 text-lg': buttonSize === 'large',
          },
          outLine ? {
            'text-black': true,
            'border-2 border-gray-300': color === 'gray',
            'border-2 border-black': color === 'black',
            'border-2 border-sky-300': color === 'sky',
            'border-2 border-pink-300': color === 'pink',
            'border-2 border-white': color === 'white',
          } : {
            'bg-gray-300': color === 'gray',
            'bg-black': color === 'black',
            'bg-sky-300': color === 'sky',
            'bg-pink-300': color === 'pink',
            'bg-white': color === 'white',
          },
        )
      }
      onClick={() => {
        gsap.fromTo(buttonRef.current, { opacity: 0, y: -20 }, { opacity: 1, duration: 0.7, y: 0, ease: "bounce.out" });
        buttonClick();
      }}>
      <p className='opacity-0'>{children}</p>
      <p className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        {isLoading ?
          <Linear/> : children
        }
      </p>
    </button >
  );
}