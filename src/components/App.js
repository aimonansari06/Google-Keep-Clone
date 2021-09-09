import React,{useState} from 'react'
import Header from './Header'
import TextArea from './TextArea';
import Archive from './Archive';
import DeleteItems from './DeleteItems';
import { BrowserRouter ,Route } from 'react-router-dom';
import '../style.css'

const App=()=> {
 
    return (
      <div>
        
      <BrowserRouter>
        <div>
        <Header/>
          <Route path='/' exact component={TextArea} />
          <Route path='/deleteditems' exact component={DeleteItems}/>
          <Route path='/archive' exact component={Archive}/>
        </div>
        </BrowserRouter>
        </div>
    )
}

export default App
