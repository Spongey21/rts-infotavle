"use client"

import Schedule from '@/components/schedule'
import Transport from "@/components/transport";

export default function Home() {
  return (
    <main className='h-[100vh]'>
      <Schedule/>
      <div className='float-right w-2/5 h-full -z-20'>
        <Transport />
      </div>
    </main>
  );
}
