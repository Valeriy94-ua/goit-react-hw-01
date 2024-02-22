// src/App.jsx

import { Profile } from "../Profile/Profile";
import "./App.module.css"
import userData from "../../userData.json"
import  {FriendList}  from "../FriendList/FriendList"
import friends from "../../friends.json"
export function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

    </>
  );
}

// const userData = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
