import { getData } from "@/api/getSoal"
import Answer from "@/components/answer"
export default async function Quiz(params){
    const { no } = params.params
    const data = await getData(no)
    return(
        <>
            {data.map((result, index) => (
                <div className="card w-full" key={index}>
                    <h3 className="font-bold">Soal Nomor {no}</h3>
                    <p className="mb-2">{result.soal}</p>
                    {<Answer data={result.option} number={no} />}
                </div>
            ))}
        </>
    )
}