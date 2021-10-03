import React from 'react'
import "../../styles/policies.css"
export const Policies = ({bus}) => {
    return (
        <div>
            <div className="note">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by Goibibo.
                <br/>Goibibo does not levy any cancellation charges.</div>
            <h3 className="note1">Other Important Information</h3>
            <div className="note_points">
            {bus.policies.map((e) => <div className="note_points_inside">
                - {e}
            </div>)}
                </div>
        </div>
    )
}
