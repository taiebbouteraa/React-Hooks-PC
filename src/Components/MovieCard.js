import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import StarRating from './StarRating'

const MovieCard = ({ film }) => {
    return (
        <div className='individual-card'>
            <Card style={{ width: '20rem' }}>
                {/* <ReactStars
                    count={5}
                    size={24}
                    value={film.rating}
                    activeColor="#ffd700"
                    edit={false}
                /> */}
                <StarRating prop={film.rating} />
                <Card.Img variant="top" src={film.posterURL} />
                <Card.Body>
                    <Card.Title>
                        {film.title}
                    </Card.Title>
                    <Card.Text style={{ minHeight: 110, maxHeight: 110, overflowY: 'scroll', height: 150, }}>{film.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
