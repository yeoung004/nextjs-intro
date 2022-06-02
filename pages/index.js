import { useState } from 'react'
import Header from '../components/Header'

export default function Home({ results }) {
  return (
    <div>
      <Header title={'Home'} />
      <div>
        {results?.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const { results } = await (await fetch('http://localhost:3000/api/movies')).json()
  return { props: { results } }
}