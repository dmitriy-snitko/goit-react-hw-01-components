import PropTypes from 'prop-types';
import defaultImg from '../Profile/no-avatar.jpg';
import s from '../Profile/Profile.module.css';

function Profile({ name, tag, location, avatar = defaultImg, stats }) {
  const { followers = 0, views = 0, likes = 0 } = stats;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar ?? defaultImg} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>
            {followers.toLocaleString('en-IN')}
          </span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views.toLocaleString('en-IN')}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes.toLocaleString('en-IN')}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
