import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import About from './about'
import Header from './utils/header'


export default function Home() {
  return (
    <div className="bg-gray-800">
          <Header/>
          <section className="flex justify-center min-h-screen items-center">
            <div className="flex-col">
              <h1 className="text-4xl md:text-6xl text-center  font-bold text-indigo-500"> Jeevi 
               <span className="text-white" > Natarajan</span>
              </h1>
              </div>
            </section>

    </div>
  
  )
}

    
