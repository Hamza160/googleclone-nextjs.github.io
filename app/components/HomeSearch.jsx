"use client"
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
const HomeSearch = () => {
    const [input, setInput] = useState('')
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = (event) => {

        event.preventDefault()
        
        if(!input.trim()) return
        
        router.push(`/search/web?searchTerm=${input}`)
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true)
        const res = await fetch(`https://random-word-api.herokuapp.com/word`)

        if(!res) return
        const data = await res.json()
        const word = data[0]
        router.push(`/search/web?searchTerm=${word}`)
        setRandomSearchLoading(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow cursor-pointer sm:max-w-xl lg:max-w-2xl'>
                <AiOutlineSearch 
                    className='text-xl text-gray-500 mr-3'
                />
                <input 
                    type="text"
                    className='flex-grow outline-none'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <BsFillMicFill
                    className='text-xl'
                />
            </form>

            <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center mt-8'>
                <button onClick={handleSubmit} className='btn'>Google Search</button>
                <button disabled={randomSearchLoading} onClick={randomSearch} className='btn flex items-center justify-center disabled:opacity-80'>{randomSearchLoading ? <img src='loding.svg' alt='Loading...' className='h-6 text-center'/> : 'I Am Feeling Lucky'}</button>
            </div>
        </>
    )
}

export default HomeSearch
