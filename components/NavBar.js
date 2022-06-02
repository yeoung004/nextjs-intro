import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar({ }) {
  const router = useRouter()
  const getColor = (url) => {
    return router.pathname === url ? 'black' : 'lightgray'
  }

  return (
    <nav>
      <Link href="/">
        <a style={{ color: getColor('/') }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: getColor('/about') }}>About</a>
      </Link>
      <style jsx>{`
          nav {
            width: 100%;
          }
          a { 
            font-size: 30px;
            text-decoration: none;
            padding: 10px;
          }
        `}
      </style>
    </nav>
  )
};
