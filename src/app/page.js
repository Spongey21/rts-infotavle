"use client"

import Weather from '@/components/weather'

export default function Home() {
  

  return (
    <main className='h-[100vh]'>
      <div className='float-right w-2/5 h-full bg-gray-600 -z-20'>
        <Weather lat={55.64152} lon={12.08035}/>
      </div>
    </main>
  );
}
