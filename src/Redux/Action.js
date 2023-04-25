import { INCREMENT,
    DECREMENT,
    ADD_COMMENTS,
    DELETE_COMMENTS,
    GET_POST_COMMENTS,
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_ERROR,
    CLEAR_ERROR } from "./Types";

export const increment=()=>{
   return {
         type:INCREMENT
   }
}
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}
export const addComments=(title,id)=>{
    console.log("action",title,id)
    return{
        type:ADD_COMMENTS,
        payload: {title,id}
    }
}
export const deleteComment = (id) => {
    return {
      type: DELETE_COMMENTS,
      payload:{id},
    };
  };
  export const getPostComent=(data)=>{
    return {
        type:GET_POST_COMMENTS,
        payload:{data}
    }
  }
  export const showloading=()=>{
    return {
        type:SHOW_LOADING
    }
  }
  export const hideLoading=()=>{
    return {
       type:HIDE_LOADING
    }
  }
  export const showEror=()=>{
    return {
        type:SHOW_ERROR
    }
  }
  export const clearEror=()=>{
    return {
        type:CLEAR_ERROR
    }
  }
  
  