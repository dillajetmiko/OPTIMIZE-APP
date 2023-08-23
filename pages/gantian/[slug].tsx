import Promo from "@/parts/promo"
import { useRouter } from "next/router"

const Gantian = () => {
  const routes = useRouter()
  const { slug } = routes.query
  return (
    <div>
      <p>gantian : {slug}</p>
      <Promo />
    </div>
  )
}

export default Gantian