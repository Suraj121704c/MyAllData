import React from 'react';
import PostItem from './PostItem';

const getData = () => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    ).then((res) => res.json());
};

const Post = () => {

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
    <div>
    <h1>Posts</h1>
      <button onClick={fetchAndUpdate}>GET POSTS</button>
      <div>
        {posts.map((post) => (
          <PostItem 
          key={post.id} 
          title={post.title}
          body={post.body} />
        ))}
      </div>  
    </div>
  )
}

export default Post
