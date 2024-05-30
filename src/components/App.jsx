// src/App.jsx

// import { Product } from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product />
//       <Product />
//       <Product />
//     </div>
//   );
// }

import { Profile } from './Profile/Profile';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
