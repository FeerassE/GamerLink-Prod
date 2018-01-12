import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

const NotFound = () => {
    return (
        <div className="notFound">
           <Link to="/">Back </Link> <h1> User Not Found. </h1>
        </div>
    )
}

export default NotFound;