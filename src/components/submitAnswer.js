'use client'
import { useState } from "react"
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function SubmitAnswer(props){
    const [answer, setAnswer] = useState('')
    const [count, setCount] = useState(0)
    const router = useRouter()
    const submit = async (e) => {
        e.preventDefault()
        try {
            const send = await fetch(process.env.NEXT_PUBLIC_API_LOCAL_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no: props.number,
                    answer: answer
                })
            })

            const response = await send.json();
            if(response.status == 200){
                setCount(count + 1)
            }

            router.replace(`/quiz/${parseInt(props.number) + 1}`)

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "terjadi kesalahan pada server",
                icon: 'error'
            })
        }
    }
    return(
        <>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => setAnswer(e.target.value)} className="rounded-sm bg-slate-600 ring-fuchsia-500 h-7 w-3/4" />
                <button type="submit" className="px-4 py-1 rounded-sm bg-sky-400 w-1/4">Submit</button>
            </form>
        </>
    )
}