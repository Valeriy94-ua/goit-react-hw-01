// src/components/Product.jsx
import css from "./Profile.module.css"

// console.log(css);
export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
        
        <div className={css.upperProfileInfo}> 
            <img
                className={css.profileImg}
                src={image}
                alt="User avatar"
              />      
            <p className={css.profileUsername}>{name}</p>
            <p className={css.profileTag}>@{tag}</p>
            <p className={css.profileLocation}>{location}</p>
        </div>

          <ul className= {css.status}>
            <li className={css.profileStatus}>
              <span className={css.profileStatusH1}>Followers</span>
              <span className={css.profileStatusH2}>{stats.followers}</span>
            </li>
            <li className={css.profileStatus}>
              <span className={css.profileStatusH1}>Views</span>
              <span className={css.profileStatusH2}>{stats.views}</span>
            </li>
            <li className={css.profileStatus}>
              <span className={css.profileStatusH1}>Likes</span>
              <span className={css.profileStatusH2}>{stats.likes}</span>
            </li>
          </ul>
        
    </div>

  );
};

