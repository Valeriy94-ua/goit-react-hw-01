// import friends from"../../friends.json"
import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import friends from "./friends.json"

export const FriendList = (friends) => {
    return (
    <ul className={css.container}>
        {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend}>
        ))}
    </ul>

    );
};

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//       PropTypes.shape({
//         avatar: PropTypes.string,
//         name: PropTypes.string,
//         isOnline: PropTypes.bool,
//         id: PropTypes.number,
//       })
//     ),
//   };
  