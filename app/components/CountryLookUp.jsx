"use client"

import { useEffect, useState } from "react"

const CountryLookUp = () => {
  const [country, setCountry] = useState('United State')

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
    .then(res => res.json()).then(data => setCountry(data.country))
  }, [])

  return (
    <div>
      {country}
    </div>
  )
}

export default CountryLookUp
