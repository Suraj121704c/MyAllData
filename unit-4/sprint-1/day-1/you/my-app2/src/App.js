import './App.css';
import Button from './components/Button.jsx';
import { Avatar } from './components/avatar.jsx';

// const squaredArr = [1,2,3,4,5].map((el)=><li>{el * 2}</li>)

const user = [
  {
  id:1,
  avatar_url:"https://avatars.githubusercontent.com/u/112753795?s=400&u=eacd7d6d1c2b49e23dabb507cd9d6b389f3b7ce4&v=4",
  name:"Suraj Singh",
  rounded : false 
  },
  {
  id:2,
  avatar_url:"https://avatars.githubusercontent.com/u/112753795?s=400&u=eacd7d6d1c2b49e23dabb507cd9d6b389f3b7ce4&v=4",
  name:"NIca",
  rounded : true 
  }
];

const userAvatars = user.map((user=> <Avatar 
  key = {user.id} // this key value should be unique 
  src={user.avatar_url} 
  name={user.name} 
  rounded={user.rounded} />
))

function App() {
  const handleButtonClick = (() =>{
    alert("button is clicked");
  })
  return (
    <div className="App">
      {/* <ul>{squaredArr}</ul> */}
      <ul>{userAvatars}</ul>
      <h1>Hello World</h1>
      <Button text="I am a button" handleButtonClick={handleButtonClick}
      />
      <br />
      <br />
      
      {/* {1+2 === 3 ? "1+2 is actually three" : "nah , it's false"}
      <br />
      <br />
      <Avatar src="https://avatars.githubusercontent.com/u/112753795?s=400&u=eacd7d6d1c2b49e23dabb507cd9d6b389f3b7ce4&v=4" name = "avatar"
      rounded={true} 
      /> */}
    </div>
  );
}

export default App;
