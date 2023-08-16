import { useRouter } from "next/router"

const Gantian = () => {
  const routes = useRouter()
  const { slug } = routes.query
  return (
    <div>gantian : {slug} </div>
  )
}

export default Gantian