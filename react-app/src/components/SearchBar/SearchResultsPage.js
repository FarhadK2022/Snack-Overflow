import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getResultsThunk } from '../../store/search';


const SearchResults = () => {
    const dispatch = useDispatch()

    const searchObj = useSelector(state => {
        return state
    })

    const search = Object.values(searchObj.searchReducer.allResults)


    useEffect(() => {
        dispatch(getResultsThunk())
    }, [dispatch])



    return (
        <div className='search-results-div'>
            <h2>{search.map((obj) => {
                return(
                    <div key={obj.id}>
                        <Link style={{textDecoration: 'none'}} to={`/questions/${obj.id}`}>
                        <p>Title: {obj.title}</p>
                        {/*

                         */}
                        </Link>
                        <p>Question Body: {obj.question}</p>
                        <p>Tried & Expected: {obj.tried_expected}</p>
                        <p>Tags: {obj.tags}</p>
                    </div>
                )
            })}
            </h2>
        </div>
    )
}


export default SearchResults
