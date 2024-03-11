import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
    <ul>
        <li className={css.container}>
            {friends.map(friend => (
            <FriendListItem key={friend.id} {...friend}/>
            ))}
        </li>
    </ul>

    );
};
export default FriendList;

  