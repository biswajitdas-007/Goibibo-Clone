import React from 'react'
import "./Reviews.css"
export const Reviews = ({bus}) => {
    return (
        <div className="rating">
            <div>Rating</div>
            <div className="star">{bus.rating}★</div>
        </div>
    )
}
