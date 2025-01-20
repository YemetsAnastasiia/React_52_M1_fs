import Button from "../Button/Button";
import './styles.css';

import { profileData } from './data';
import userAvatar from '../../assets/avatar.webp';


function ProfileCard() {
    // достать все свойства из объекта profileData и сохранит их в отдельные переменные 
    const { first_last_name, profession, hobby, userAvatar } = profileData;

    return (
        <div className="profile-card-wrapper">
            {/*        // 1 вариант - абсолютный путь
            <img src={profileData.avatar}  alt="avatar image"/> */}

            {/*      2 вариант работв с картинкой - относительный путь  */}

            <img src={userAvatar} className="card-img" />
            <h3>{first_last_name}</h3>
            <div>{profession}</div>
            <div>{hobby}</div>
        </div>
    );
}

export default ProfileCard;