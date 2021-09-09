import React, { useState } from 'react'


function SearchList({ note }) {
    
    const [searchText, setSearchText] = useState('');
    const onHandleChangeSearch = (e) => {
        setSearchText(e.target.value);
       

    }

    return (

        <div className="cent-menu menu">
            <a href="/" className="item">
                <i className="yellow file icon"></i>
                Keep
            </a>
            <div className="item">
                <div className="ui icon input">
                    <input onChange={onHandleChangeSearch} className='inp-txt' type="text" placeholder="Search..." />
                    <i className="search link icon"></i>
                </div>
            </div>
            <a href="/" className="ui item">
                <i className="yellow user icon"></i>
            </a>

        {note.filter(blah => blah.title.toUpperCase() === searchText.toUpperCase()).map(filtersearch => (
            <div style={{ backgroundColor: filtersearch.color }} className='note'>
                <h1>{filtersearch.title}</h1>
                <p>{filtersearch.desc}  </p>

            </div>
        ))}
        </div>
        )
}
           
  


export default SearchList;


