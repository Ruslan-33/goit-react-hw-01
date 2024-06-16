import css from '../FriendList/FriendList.module.css';
import friends from '../../friends.json';
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
