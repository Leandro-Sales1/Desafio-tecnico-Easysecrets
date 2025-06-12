import salesDB from "./db/sales.json"
import type { ISales } from "./interfaces/ISales"


function App() {
  const sales : ISales[] = salesDB
  console.log(sales);


  return (
    <>
      <h1 className=" mt-44">teste</h1>

    </>
  )
}

export default App
