// Your code goes here
// do a default export
import React from "react";
function UserCard(props) { 
    let {name,avatar,posts,followers,address} = props
    let [ follow , setFollow ] = React.useState("follow");
    function myFun(){
        follow === "follow" ? setFollow("following") : setFollow("follow");
    }
    return <>               
           <img style={{borderRadius : "50%"}} src={avatar} alt={name} />
                   <h2 data-testid="user_name">{name}</h2>
                   <p data-testid = "user_address">{address}</p>
                    <h3>Posts</h3>
                    <p   data-testid = "user_posts">{posts}</p>
                    <h3>Followers</h3>
                    <p  data-testid = "user_followers">{followers}</p>
           <button onClick={myFun}>{follow}</button>
</>
}
export default UserCard;



