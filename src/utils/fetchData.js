async function fetchData() {
    const res = await fetch("/ticketData.json")
    
    return await res.json()

}
export default fetchData