import axios from "axios"
import { useState } from "react"

export const Prompt = () => {
    const [activity, setActivity] = useState(null)

    const fetchActivity = async () => {
        const activity = await axios.get("https://www.boredapi.com/api/activity").then(res => res.data)
        setActivity(activity)
    }

    return (
        <main className="h-screen">
            <div className="prompt align-middle">
                <div>{activity && activity.activity}</div>
                <button onClick={() => fetchActivity()} className="btn btn-red">What should I do?</button>
            </div>
        </main>
    )
}

