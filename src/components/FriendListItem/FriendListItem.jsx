import friends from '../../friends.json';
import css from '../../components/FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div key="id">
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
}
