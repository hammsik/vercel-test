'use client';

// import Button from "@/stories/Button";
import LinearLoader from "@/stories/LoadingAnime/Linear";
import classNames from "classnames";
import { Button } from "@/components/ui/button"
import FramerTest from "./components/framerTest";


export function MyButton(
  { children, ...props }
    : React.HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={
        classNames(
          "bg-blue-500 text-white px-4 py-2 rounded-lg",
          props.className
        )
      }
    >{children}</button>
  );
}

export default function Home() {
  return (
    <>
      <header></header>
      <main className="w-[100dvw] h-[100dvh] flex flex-col items-center bg-slate-800">
        <section className="bg-white">
          <LinearLoader linearSize="large" linearColor='gray' className='bg-blue-400' />
          <Button className='bg-slate-600'>오우예에</Button>
          <LinearLoader linearSize="large" linearColor='gray' className='bg-blue-400' />
          <Button className='bg-slate-600'>오우예에</Button>
          <LinearLoader linearSize="large" linearColor='gray' className='bg-blue-400' />
          <Button className='bg-slate-600'>오우예에</Button>
        </section>
        <FramerTest/>
      </main>
      <footer></footer>
    </>
  );
}