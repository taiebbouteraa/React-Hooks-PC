import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { InputGroup, FormControl } from 'react-bootstrap';
import AddMovie from './AddMovie';

const Search = ({ searchText, searchStars, handleSearchStars, handleSearchText }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='navigation'>
            <AddMovie />
            <h1>LOGO</h1>
            <InputGroup id="search-bar">
                <FormControl
                    placeholder="Search"
                    type='text'
                    value={searchText}
                    onChange={handleSearchText}
                />
            </InputGroup>
            <ReactStars
                searchStars={searchStars}
                onChange={ratingChanged, handleSearchStars}
                count={5}
                size={24}
                value={1}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default Search
