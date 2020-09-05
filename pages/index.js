import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    
    <div className="container mx-auto">
        <Head>
        <title>Jeevi Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span > 
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
     
        <Link href="/stories">
          <a>Stories</a>
        </Link>
     
        </span>   


         Hey world this is Jeevi! I exists!!!
    </div>
  )
}
