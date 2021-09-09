export const createList=(title, content,color)=>{
    return {
      //Action (a form in our analogy)
      type:'CREATE_LIST',
      payload:{
        title:title,
        content :content,
        color:color
      }
    };
  };
  export const deleteList=(title,content,color)=>{
    return {
      //Action (a form in our analogy)
      type:'DELETE_LIST',
      payload:{
       
        title:title,
       content:content,
        color:color
      }
    };
  };
  export const archiveList=(title, content,color)=>{
    return {
      //Action (a form in our analogy)
      type:'ARCHIVE_LIST',
      payload:{
        title:title,
        content :content,
        color:color
      }
    };
  };