import { useRouter } from 'next/router'
export default function Detail() {
  const router = useRouter()
  return 'Detail'
}

// export async function getServerSideProps(){
//   const { results } = await (await fetch(`http://localhost:3000/api/movies/${id}`)).json()
//   return { props: { results } }
// }