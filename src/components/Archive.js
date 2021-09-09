import React from 'react'
import { connect } from 'react-redux';

function Archive({archive }) {

    console.log(archive)
    return (
        <div>
        {
            archive.map((item, id) => <div key={id} style={{ backgroundColor: item.color }} className='note'>
                <h1>{item.title}</h1>
                <p>{item.content}  </p>
            </div>)
        }
        </div>
    )
}


const mapStateToProps = state => {
    return { archive: state.archive }
}
export default connect(mapStateToProps)(Archive);
