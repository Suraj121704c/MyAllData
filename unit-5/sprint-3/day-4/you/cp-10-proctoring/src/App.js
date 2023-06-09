import './App.css';
import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Post } from './components/Post';

const initialState = {
  title: '',
  body: '',
};

const App = memo(() => {
  const [timerState, setTimerState] = useState(0);
  const [data, setData] = useState(initialState);
  const [p, setP] = useState([]);

  const incrementTimer = () => {
    setTimerState((prevState) => prevState + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(incrementTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { title, body } = data;

  const handleAdd = () => {
    const newData = {
      id: Date.now(),
      title: title,
      body: body,
      verifyPost: false,
    };
    setP([...p, newData]);
    setData(initialState);
  };

  //   console.log(p)

  const handleToogle = useCallback((id) => {
    setP((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, verifyPost: !el.verifyPost } : el;
      });
    });
  }, []);

  return (
    <div className="App" data-testid="app">
      <div data-testid="timer">
        Timer: {timerState}
        {/* Add timer here, refer to image in prolblem statement*/}
      </div>
      <div>
        {/* Below is the input tag for title */}
        <input
          placeholder="Enter post title"
          data-testid="title-input"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <br />
        {/* Below is the textarea tag for body */}
        <textarea
          placeholder="Enter post body"
          data-testid="post-input"
          value={body}
          name="body"
          onChange={handleChange}
        ></textarea>
        <br />
        <button data-testid="add-post-button" onClick={handleAdd}>
          Add Post
        </button>
      </div>

      <hr />
      <h1>Posts</h1>
      <div data-testid="posts-container">
        {/* map your posts with the Post Component and pass the required props */}
        {p.map((el) => (
          <Post key={el.id} {...el} handleToogle={handleToogle} />
        ))}
      </div>
    </div>
  );
});

export default App;
