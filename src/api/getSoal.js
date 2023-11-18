export async function getData(no){
    const response = await fetch(process.env.NEXT_PUBLIC_API_LOCAL_URL + no)
    return response.json()
}