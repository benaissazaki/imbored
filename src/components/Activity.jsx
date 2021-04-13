import { ReactSVG } from "react-svg"

export const Activity = ({ activity }) => {
    if (activity) {
        return (
            <div className="activity-wrapper">
                <ReactSVG src={`/icons/${activity.type}.svg`} className="animate-bounce"/>
                <span className="activity">{activity.activity}</span>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}