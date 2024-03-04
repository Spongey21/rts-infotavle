"use client"

import Clock from "../components/clock";
import Schedule from '@/components/schedule'
import Transport from "@/components/transport";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-[17.5vh] text-center capitalize flex flex-col justify-center">
        <h1 className="text-6xl">velkommen til pulsen 8</h1>
        <h2 className="text-4xl">indgang A/B</h2>
      </header>
      <main className="h-[65vh] w-[96%] m-auto flex justify-between">
        <Schedule/>
        <div className="float-right w-[40%] h-full">
          <Transport /> 
        </div>
      </main>
      <footer className="h-[17.5vh] w-[96%] m-auto flex justify-between items-center">
        <Image src="/RTS-logo.png" width={100} height={0} alt="RTS logo" style={{height: '80%'}}/>
        <Clock/>
      </footer>
    </>
  );
}
