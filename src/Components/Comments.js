import React, { useState, useEffect, useCallback } from "react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { showEror, hideLoading, clearEror, showloading } from "../Redux/Action";
import { addComments, getPostComent } from "../Redux/Action";
import SingleComments from "./Single-comments";
import { getPost } from "../Services/Services";
import Loading from "./Loading";

const Comments = () => {
  const dispatch = useDispatch();
  const { comments, eror, loading } = useSelector(
    (state) => state.ComentReducer
  );
  console.log("comment>>>", comments);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    console.log("input", id, input);
    dispatch(addComments(input, id));
    setInput("");
  };
  const loadPost = useCallback(async () => {
    dispatch(showloading())
    dispatch(clearEror())
    try {
      const data = await getPost();
      console.log("daata", data);
      dispatch(getPostComent(data.data));
    } catch (e) {
      dispatch(showEror("че то не так"));
    }finally {
      dispatch(hideLoading());
    }
  }, []);
  useEffect(() => {
    loadPost();
  }, []);
  if (loading ){
    return <Loading />
  }
  if (eror){
    return(
      <div>
        <p>{eror}</p>
        <button onClick={loadPost}>повторить</button>
      </div>
    )
  }
  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit}>
        <div className="comments-item">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="comment"
          />
          <input type="submit" hidden />
        </div>
      </form>
      {comments.map((elem) => {
        return <SingleComments key={elem.id} {...elem} />;
      })}
    </div>
  );
};

export default Comments;
