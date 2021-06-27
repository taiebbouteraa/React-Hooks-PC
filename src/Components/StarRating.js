import React from 'react'

const StarRating = ({ prop }) => {
    const stars = (x) => {
        let star = []
        for (let i = 0; i < 5; i++) {
            if (i < x) {
                star.push(<span style={{ fontSize: 30, color: 'red' }}>★</span>)
            } else
                star.push(<span style={{ fontSize: 30, color: 'blacck' }}>★</span>)
        }
        return star
    }
    return (
        <div className='rating-div'>
            {stars(prop)}
        </div>
    )
}

export default StarRating
