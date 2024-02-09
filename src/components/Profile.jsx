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
            <p className="profile-username">{username}</p>
            <p className="profile-tag">@{tag}</p>
            <p className="profile-location">{location}</p>
        </div>

          <ul className= "status">
            <li className="profile-status">
              <span className="profile-status-h1">Followers</span>
              <span className="profile-status-h2">{stats.followers}</span>
            </li>
            <li className="profile-status">
              <span className="profile-status-h1">Views</span>
              <span className="profile-status-h2">{stats.views}</span>
            </li>
            <li className="profile-status">
              <span className="profile-status-h1">Likes</span>
              <span className="profile-status-h2">{stats.likes}</span>
            </li>
          </ul>
        
    </div>

  );
};

