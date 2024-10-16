
/*import Link from "next/link"
import ProductCard from "./components/ProductCard"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Homepage () {

 const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello { session && <span>{session.user!.name}</span>}</h1>
      <Link href='/users'>Users</Link>
      <ProductCard/>
    </main>
  )
}*/


/*import Image from 'next/image';
import coffee from '@/public/images/coffee.jpg'
import { Metadata } from 'next';

export default async function Homepage(){
  return (
    <main className='relative h-screen'>
      <h1 className='font-poppins'>Hello world</h1>
      <Image
          src="https://bit.ly/react-cover"
          alt='Coffee'
          fill
          className='object-cover'
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
          quality={100}
          priority
          />
    </main>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("")

  return {
    title: 'product.title',
    description: "...."
  }
}*/


'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() =>
  import('./components/HeavyComponent'),
  {
     ssr: false,
    loading: () => <p>Loading...</p>
  } )



export default function HomePage(){
  const [ isVisible, setVisible] = useState(false)
  return (
    <main>
      <h1>Hello world</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      { isVisible && <HeavyComponent/> }

      <button onClick={async() => {
        const _ = (await import ('lodash')).default;

        const users = [
         { name: "c" },
         { name: "b" },
         { name: "a" }
        ];

       const sorted =  _.orderBy(users, ['name'])
       console.log(sorted)
      }}>Show</button>
    </main>
  )
}
