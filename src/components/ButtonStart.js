'use client'
import { useRouter } from "next/navigation"

export default function ButtonStart(){
    const router = useRouter()
    const start = () => {
        router.replace('/quiz/1')
    }
    return(
        <button onClick={start} className="bg-sky-400 text-white px-5 py-2 rounded mt-2">Mulai Quiz</button>
    )
}