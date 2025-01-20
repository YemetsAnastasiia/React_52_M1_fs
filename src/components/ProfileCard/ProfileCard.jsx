import Button from "../Button/Button";
import './styles.css';

import  {profileData} from './data';


function ProfileCard() {

    return (
<div className="profile-card-wrapper">
<img src= {profileData.avatar}  />
<h2>{profileData.first_last_name}</h2>
<div>Profession: {profileData.profession}</div>
<div>Hobby: {profileData.hobby}</div>
<Button />
</div>
    );
}

export default ProfileCard;