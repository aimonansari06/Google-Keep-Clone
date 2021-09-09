import React from 'react'
import { connect } from 'react-redux';

function DeleteItems({ dlt }) {

    console.log(dlt)
    return (
        <div>
        {
            dlt.map((item, id) => <div key={id} style={{ backgroundColor: item.color }} className='note'>
                <h1>{item.title}</h1>
                <p>{item.content}  </p>
            </div>)
        }
        </div>
    )
}


const mapStateToProps = state => {
    return { dlt: state.dlt }
}
export default connect(mapStateToProps)(DeleteItems);
