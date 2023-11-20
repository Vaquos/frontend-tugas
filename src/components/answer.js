'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Answer(props){
    const navigation = useRouter()
    const data = props.data
    const option = Object.keys(data)
    const [count, setCount] = useState('')
    const [answer, setAnswer] = useState('')
    const send = {};
    const change = (e) => {
        sessionStorage.setItem(props.number, e.target.value)
        setAnswer(e.target.value)
    }

    const next = () => {
        navigation.replace(`/quiz/${parseInt(props.number) + 1}`)
    }

    const back = () => {
        navigation.replace(`/quiz/${parseInt(props.number) + - 1}`)
    }

    const kirim = async () => {
        for(let i = 1; i <= parseInt(sessionStorage.getItem('soal')); i++){
            if(sessionStorage.getItem(i) != null){
                send[i] = sessionStorage.getItem(i)
            }
        }
        
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'result', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'no-store',
                body: JSON.stringify(send)
            })
            const result = await response.json()
            sessionStorage.clear()
            sessionStorage.setItem('benar', result.benar)
            sessionStorage.setItem('salah', result.salah)
            sessionStorage.setItem('hasil', result.nilai)
            navigation.replace('/hasil')
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "terjadi kesalahan pada server",
                icon: 'error'
            })
        }
    }

    useEffect(() => {
        setCount(sessionStorage.getItem('soal'))
        if(sessionStorage.getItem(props.number) != null){
            setAnswer(sessionStorage.getItem(props.number))
        }

    },[])

    return(
        <>
            <div>
                {option.map((result, index) => (
                    <div key={index} className="flex">
                        <input type="radio" onChange={change} name={`answer`} value={result} checked={...answer == result} /><label>{result + '.' +data[result]}</label>
                    </div>
                ))}
            </div>
            <div className={(parseInt(props.number - 1) != 0)? 'w-full flex justify-between' :'w-full flex justify-end'}>
                {(parseInt(props.number - 1) != 0)?<button className="bg-sky-400 px-4 py-2 rounded-sm text-white" onClick={back}>Kembali</button> : ''}
                {(parseInt(props.number) == count)?<button className="bg-sky-400 px-4 py-2 rounded-sm text-white" onClick={kirim}>Kirim</button> : <button className="bg-sky-400 px-4 py-2 rounded-sm text-white" onClick={next}>Selanjutnya</button>}
            </div>
        </>
    )
}