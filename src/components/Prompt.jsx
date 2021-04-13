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
            <div className="prompt align-middle">
                <Activity activity={activity} />
                <button onClick={() => fetchActivity()} className="btn btn-red">What should I do?</button>
            </div>
        </main>
    )
}

