import { getData } from "@/api/getSoal"
import SubmitAnswer from "@/components/submitAnswer"
export default async function Quiz(params){
    const { no } = params.params
    const data = await getData(no)
    console.log(data)
    return(
        <>
            {data.map((result, index) => (
                <div className="card w-full" key={index}>
                    <h3 className="font-bold">Soal Nomor {no}</h3>
                    <p>{result.soal}</p>
                    <SubmitAnswer number={no} />
                </div>
            ))}
        </>
    )
}