"use client"

import Clock from "./component/clock";
import Schedule from '@/components/schedule'
import Transport from "@/components/transport";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-[15vh] text-center capitalize flex flex-col justify-center">
        <h1 className="text-4xl">velkommen til pulsen 8</h1>
        <h2 className="text-3xl">indgang A/B</h2>
      </header>
      <main className="h-[70vh] w-[96%] m-auto flex justify-between">
        <Schedule/>
        <div className="float-right w-[40%] h-full">
          <Transport /> 
        </div>
      </main>
      <footer className="h-[15vh] w-5/6 m-auto flex justify-between">
        <Image src="/RTS-logo.png" width={70} height={0} alt="RTS logo" style={{height: '60%', margin: 'auto 0'}}/>
        <Clock/>
      </footer>
    </>
  );
}
