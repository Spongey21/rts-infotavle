"use client"

import Clock from "./component/clock";
import Schedule from '@/components/schedule'
import Transport from "@/components/transport";

export default function Home() {
  return (
    <>
      <header className="h-[10vh] text-center uppercase text-xl font-medium	flex flex-col justify-center">
        <h1 className="">velkommen til pulsen 8</h1>
        <h2 className="uppercase">indgang A/B</h2>
      </header>
      <main className="h-[80vh] w-11/12 m-auto border-2">
        <Schedule/>
        <div className="float-right w-1/2 h-1/2 border-2 border-black">
          <Transport />
        </div>
      </main>
      <footer className="h-[10vh] w-5/6 m-auto flex justify-between">
      <img className="h-[80%] mt-auto mb-auto" src="./RTS-logo.png"/>
        <Clock/>
      </footer>
    </>
  );
}
