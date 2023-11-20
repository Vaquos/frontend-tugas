'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ButtonStart(){
    const router = useRouter()
    const start = () => {
        router.replace('/quiz/1')
    }
    useEffect( () => {
        fetch(process.env.NEXT_PUBLIC_API_URL, {cache:'no-store'})
        .then(result => result.json())
        .then(data => sessionStorage.setItem('soal', data.result))
    },[])
    return(
        <button onClick={start} className="bg-sky-400 text-white px-5 py-2 rounded mt-2">Mulai Quiz</button>
    )
}