import React, { useState } from 'react'
import '../style.css'
import { connect } from 'react-redux';
import SearchList from './SearchList'



function TextArea({ sendDataDelete, sendDataArchive }) {
   
    const [searchText, setSearchtext]= useState('');
    const [notes, setNote] = useState({
        title: '', desc: '', color: ''
    });

    const [dltdata, setDltData] = useState([]);
    const [archdata, setArchData] = useState([]);
    const colors = ['#fe9b72', '#fec971', '#00d4fe', "#b693fd", '#e4ee91']
    const [newNote, setNewNote] = useState([]);
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setNote((olditem) => {

            return {
                ...olditem, [name]: value,
            }
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();

        setNewNote((olddata) => {
            return [...olddata, notes]
        })

        setNote({
            title: '', desc: '', color: ''
        })


    }

    const onDelete = (id) => {

        setDltData((olddata) => {
            return [...olddata, ...newNote.filter((note, index) => index === id)]
        });


        try {
            sendDataDelete(dltdata, id)
        }
        catch (err) {
            console.log(err)
        }
        setNewNote((olddata) => {
            return [...olddata.filter((note, index) => index !== id)]
        })


    }


    const onArchive = (id) => {
        setArchData((olddata) => {
            return [...olddata, ...newNote.filter((note, index) => index === id)]
        })
        console.log(archdata)
        try {
            sendDataArchive(archdata, id)
        }
        catch (err) {
            console.log(err)
        }

        setNewNote((olddata) => {
            return [...olddata.filter((note, index) => index !== id)]
        })
    }

    return (
        <div>
            <SearchList note={newNote}/>
            <form style={{ backgroundColor: notes.color }}>
                <input style={{ backgroundColor: notes.color }} value={notes.title} name='title' type='text' placeholder="Title" onChange={onHandleChange} />
                <p>
                    <textarea style={{ backgroundColor: notes.color }} value={notes.desc} name='desc' placeholder='Take a note...' onChange={onHandleChange}>
                    </textarea>
                </p>
                <div class=" ui compact menu">
                    <div class="ui-menu ui simple dropdown item">
                        <i className='paint brush icon' />
                        <ul className="menu">
                            {colors.map((clr, index) => <li key={index} value={notes.color} name='color' onClick={() => { setNote({ title: notes.title, desc: notes.desc, color: clr }); }} onChange={onHandleChange} style={{ backgroundColor: clr }} />
                            )}
                        </ul>
                    </div>
                </div>

                <button onClick={onSubmit}>Add</button>

            </form>
            
            {newNote.map((item, id) => <div key={id} style={{ backgroundColor: item.color }} className='note'>
                <h1>{item.title}</h1>
                <p>{item.desc}  </p>
                <button onClick={() => onDelete(id)}><i className="trash icon"></i></button>
                <button onClick={() => onArchive(id)}><i className='archive icon'></i></button>
            </div>)}

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendDataDelete: (dltdata, id) => { dispatch({ type: 'DELETE_LIST', payload: { title: dltdata[id].title, content: dltdata[id].desc, color: dltdata[id].color } }) },
        sendDataArchive: (arch, id) => { dispatch({ type: 'ARCHIVE_LIST', payload: { title: arch[id].title, content: arch[id].desc, color: arch[id].color } }) }
    }
}

export default connect(null, mapDispatchToProps)(TextArea);
