import React from 'react'
import "./policies.css"
export const Policies = ({bus}) => {
    return (
        <div>
            <div className="note">Note : Cancellation policy mentioned on website OR on ticket is of bus operator and is not decided by Goibibo. Goibibo does not levy any cancellation charges.</div>
            <h3>Other Important Information</h3>
            <div className="note_points">
            {bus.policies.map((e) => <div>
                -{ "  "}{e}
            </div>)}
                </div>
        </div>
    )
}
