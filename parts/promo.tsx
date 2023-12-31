interface IPromo {
  data: any;
}

const Promo = ({ data }: Partial<IPromo>) => {
  console.log("dari promo", { data });

  return (
    <div>
      dilla dari promo
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Promo