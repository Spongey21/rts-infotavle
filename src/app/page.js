"use client"

import Clock from "../components/clock";
import Schedule from '@/components/schedule'
import Transport from "@/components/transport";
import Weather from "@/components/weather";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-[15vh] text-center capitalize flex flex-col justify-center">
        <h1 className="text-6xl">velkommen til pulsen 8</h1>
        <h2 className="text-4xl">indgang A/B</h2>
      </header>
      <main className="h-[70vh] w-[96%] m-auto flex justify-between">
        <Schedule/>
        <div className="float-right w-[40%] h-full flex flex-col gap-8">
          <Transport /> 
          <Weather />
        </div>
      </main>
      <footer className="h-[15vh] w-[96%] m-auto flex justify-between items-center">
        <Image src="/RTS-logo.png" width={100} height={0} alt="RTS logo" style={{height: '80%'}}/>
        <Clock/>
      </footer>
    </>
  );
}
