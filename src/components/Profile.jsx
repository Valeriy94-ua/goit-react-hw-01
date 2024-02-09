// src/components/Product.jsx
import "./Profile.css"
export const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className="container">
        
        <div className="upper-profile-info"> 
            <img
                className="profile-img"
                src={image}
                alt="User avatar"
              />      
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

          <ul className= "status">
            <li>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
          </ul>
        
    </div>

  );
};

