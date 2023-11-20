'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CircularProgress } from "@nextui-org/react"

export default function HasilComponent() {
    const router = useRouter()
    const [benar, setBenar] = useState(0);
    const [salah, setSalah] = useState(0);
    const [hasil, setHasil] = useState(0);

    useEffect(() => {
        setBenar(sessionStorage.getItem('benar'))
        setSalah(sessionStorage.getItem('salah'))
        setHasil(sessionStorage.getItem('hasil'))

        if(sessionStorage.getItem('hasil') == null){
            router.replace('/')
        }

    },[])

    return(
        <>
            <CircularProgress
                aria-label="Loading..."
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-sky-400",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                }}
                value={hasil}
                strokeWidth={4}
                showValueLabel={true}
            />
            <div className="flex justify-between w-5/12 mt-5">
                <span className="text-white">Benar : {benar}</span>
                <span className="text-white">Salah : {salah}</span>
            </div>
        </>
    )
}