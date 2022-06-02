import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home({ results }) {
  return (
    <div>
      <Header title={'Home'} />
      <div>
        {results?.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <a>
              <div>
                  <Image 
                    objectFit={'contain'}
                    layout={'fixed'}
                    alt='movie' 
                    width='200px'
                    height='500px'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <h4>{movie.title}</h4>
              </div>
            </a>
          </Link>
        ))}
      </div>
    <style jsx>
      {`
          a {
            color: black;
            text-decoration: none;
          }
      `}
    </style>
    </div>
  )
}

export async function getServerSideProps(){
  const { results } = await (await fetch('http://localhost:3000/api/movies')).json()
  return { props: { results } }
}