import { ReactSVG } from "react-svg"

export const Activity = ({ activity }) => {
    if (activity) {
        return (
            <div>
                <ReactSVG src={`/icons/${activity.type}.svg`} />
                {activity.activity}
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}