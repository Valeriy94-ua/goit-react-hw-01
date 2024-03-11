import css from "./FriendListItem.module.css"


export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
    <div className={css.friendListItem}>
      <span
        className={`${css.status} ${
          isOnline ? `${css.online}` : `${css.offline}`
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>

    )
}

export default FriendListItem;