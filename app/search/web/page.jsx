import Link from "next/link"

const SearchWebPage = async ({searchParams}) => {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_SEACRH_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}`)

  if(!response.ok){
    throw new Error(`Something Went Wrong`)
  }

  const data = await response.json()
  const results = data.items

  if(!results){
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg">
        Try search for something else or got back to home page {" "}
        <Link href='/' className="text-blue-500">Home</Link>
      </p>
    </div>
  }

  return (
    <div>
      {
      results && 
      results.map(item => <h1>{item.title}</h1>)
      }
    </div>
  )
}

export default SearchWebPage
