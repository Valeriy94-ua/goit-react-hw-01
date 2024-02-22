import css from "./FriendList.module.css"


export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
    <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline}</p>
    </div>

    )
}