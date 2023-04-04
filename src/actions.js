import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://traxcapstonebe.onrender.com"

//createAction => create a todo from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newTrax = {
        name: formData.get("name"),
        workout: formData.get("workout"),
        meal: formData.get("meal"),
        weight: formData.get("weight"),
        notes: formData.get("notes")
    }

    // send request to backend
    await fetch(URL + "/traxs/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrax)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get trax id
    const id = params.id

    // construct request body
    const updatedTrax = {
        name: formData.get("name"),
        workout: formData.get("workout"),
        meal: formData.get("meal"),
        weight: formData.get("weight"),
        notes: formData.get("notes")
    }

    // send request to backend
    await fetch(URL + `/traxs/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTrax)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a trax from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get trax id
    const id = params.id

    // send request to backend
    await fetch(URL + `/traxs/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}