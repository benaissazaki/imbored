import axios from "axios"
import { useState } from "react"
import { Activity } from "./Activity"

export const Prompt = () => {
    const [activity, setActivity] = useState(null)

    const fetchActivity = async () => {
        const activity = await axios.get("https://www.boredapi.com/api/activity").then(res => res.data)
        console.log(activity);
        setActivity(activity)
    }

    return (
        <main className="h-screen">
            <div className="prompt text-center mx-auto shadow-lg bg-blue-300">
                <Activity activity={activity} />
                <button onClick={() => fetchActivity()} className="btn btn-red mt-5">What should I do?</button>
            </div>
        </main>
    )
}

