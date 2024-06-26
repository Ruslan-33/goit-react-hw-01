import css from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  return (
    <div className={css.friend}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline === true ? css.offline : css.online)}>
        {isOnline === true ? 'OnLine' : 'OffLine'}
      </p>
    </div>
  );
}
