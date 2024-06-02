import css from './Profile.module.css';

export default function Profile({ username, tag, location, image, stats }) {
  return (
    <div className={css.profile_container}>
      <div className={css.profile_up}>
        <img className={css.profile_img} src={image} alt={username} />
        <p className={css.profile_name}>{username}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul>
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
}
