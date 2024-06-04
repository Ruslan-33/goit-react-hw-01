import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul>
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
        <li>
          <FriendListItem />
        </li>
      </ul>
    </div>
  );
}
