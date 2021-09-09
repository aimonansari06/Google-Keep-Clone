
export default (oldListOfKeep=[], action)=>{
  if(action.type==='ARCHIVE_LIST'){
    //we care about it
      return [...oldListOfKeep, action.payload]
  }
  return oldListOfKeep;
  //else we dont care
}