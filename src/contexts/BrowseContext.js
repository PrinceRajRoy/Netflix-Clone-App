import React, { createContext, useState } from 'react';

export const BrowseContext = createContext();

const BrowseContextProvider = (props) => {

    const [genres, setGenres] = useState([]);
    const addGenres = (genres) => {
        Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ({id, name}) => ({[id]: name}) ));
        const objGenres = Object.fromEntries(genres);
        setGenres(objGenres);
    }

    return (
        <BrowseContext.Provider value={{genres: genres, addGenres: addGenres}}>
            {props.children}
        </BrowseContext.Provider>
    )
}

export default BrowseContextProvider;