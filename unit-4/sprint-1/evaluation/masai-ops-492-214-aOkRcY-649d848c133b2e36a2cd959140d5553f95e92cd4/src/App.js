// import Courses ,Title and UserCard here
import Title from "./Components/Title.jsx";
import UserCard from "./Components/UserCard.jsx";
import Courses from "./Components/Courses.jsx";

// keep a user object with mentioned properties and pass down to UserCard as prop
let user = {
  avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  name: "Alf",
  address: "43766 Mallory Place",
  followers: 97350,
  posts: 930
};

export default function App() {
  return <>
   <Title  />
   <UserCard name = {user.name} avatar = {user.avatar} posts = {user.posts} followers = {user.followers} address = {user.address} />
   <Courses />
  </>;
}
