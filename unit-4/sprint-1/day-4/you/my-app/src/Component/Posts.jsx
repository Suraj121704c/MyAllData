import React from "react";
import PostItem from "./PostItem.jsx";

// Fetching the data
const getData = () => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json());
};

function Posts() {
  const [posts, setPosts] = React.useState([]);

  const fetchAndUpdateData = async () => {
    try {
      const data = await getData();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <button onClick={fetchAndUpdateData}>GET POSTS</button>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} />
        ))}
      </ul>
    </>
  );
}
export default Posts;

//API server Link
//https://jsonplaceholder.typicode.com/posts
