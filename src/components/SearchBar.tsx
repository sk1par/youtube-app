import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions';
import youTubeApi from '../api/youtube';


const SearchBar = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (term) {
            const response= await youTubeApi.get('/search', {
                params: {
                    q: term
                }
            });

            dispatch(allActions.videosActions(response.data.items));
        }
    };

    return (
        <>
            <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                    <div className='button'>
                <button type="submit" className="ui black basic button">Search</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar
