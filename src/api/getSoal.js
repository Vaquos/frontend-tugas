export async function getData(no){
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + no, {cache: 'no-store'})
    return response.json()
}