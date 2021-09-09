import React from 'react'
import {Link} from 'react-router-dom';
import TextArea from './TextArea';

const Header = ({handleSearchNote}) => {
    return (
        <>

            <div className="ui-menu ui secondary  menu">
                <div className="sidebar ui left demo vertical inverted sidebar icon menu visible">
                    <Link to="/"className="item">
                        <i className="yellow lightbulb outline icon"></i>
                       
                    </Link>
                    <Link to="/archive" className="item">
                        <i className="yellow archive icon"></i>
                       
                    </Link>
                    <Link to="/deleteditems" className="item">
                        <i className="yellow trash alternate outline icon"></i>
                       
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default Header
