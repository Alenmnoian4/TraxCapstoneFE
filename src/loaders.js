// YOUR DEPLOYED API BASE URL
const URL = "https://traxcapstonebe.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/traxs/")
    const traxs = await response.json()
    return traxs
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/traxs/${params.id}/`)
    const trax = await response.json()
    return trax
}
