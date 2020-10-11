import { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head';

export default function Header() {

  const router = useRouter();
  const active = "underline p-4 text-xl";
  const notActive = "p-4 text-xl"

  return (
    <div >
      <Head>
      <title>Jeevi Stories</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <nav>
      <ul className="flex text-white fixed list-none w-full justify-end bg-gray-800">
        <li className={router.pathname == "/" ? active:notActive}> <Link href="/">Home</Link></li>
        <li className={router.pathname == "/skills" ? active:notActive}> <Link href="/skills">Skills</Link></li>
        <li className={router.pathname == "/stories" ? active:notActive}> <Link href="/stories">Stories</Link></li>
        <li className={router.pathname == "/about" ? active:notActive}> <Link href="/about">About</Link></li>
      </ul>
      </nav>
    </div>
  );
}
