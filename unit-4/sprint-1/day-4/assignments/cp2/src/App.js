import "./App.css";
import React from "react";
import Post from "./Components/Post";

const getData = () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=>res.json());
}

function App() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  const fetchAndUpdate = async () => {
    try {
      setLoading(true);
      const data = await getData();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setErr(true);
    }
  };

  if (loading) {
    return <h1>Loading......</h1>;
  }

  if (err) {
    return <h1>Something went wrong... Please refresh</h1>;
  }

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={fetchAndUpdate}
      >
        GET POSTS
      </button>
      <div id="post-container">
      {posts.map((post) => (
          <Post 
          key={post.id} 
          title={post.title}
          body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
