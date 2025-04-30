import { useState, useEffect } from 'react'
import './App.css'
import { getPosts, getRandmUser } from './api'
import PostCard from './components/PostCard'
import UserCard from './components/UserCard';

function App() {
  const [data, setData] = useState(null);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandmUser().then((user) => {
      const u = user.results[0];
      const Data = {
        name: `${u.name.title} ${u.name.first} ${u.name.last}`,
        gender: u.gender,
        email: u.email,
        address: `${u.location.street.number} ${u.location.street.name}, ${u.location.city}, ${u.location.state}, ${u.location.country} ${u.location.postcode}`,
        phone: u.phone,
        img: u.picture.large,
        dob: u.dob.date,
        age: u.dob.age,
      };
      setProfileData(Data);
      console.log("Data", Data);
    });
  }, []);

  return (
    <>
      <div className="main">
        <div className="profile">
          {
            profileData ? (
              <UserCard
                name={profileData.name}
                gender={profileData.gender}
                email={profileData.email}
                address={profileData.address}
                phone={profileData.phone}
                img={profileData.img}
                dob={profileData.dob}
                age={profileData.age}
              />
            ) : (
              <h1>Loading...</h1>
            )
          }
        </div>
        <div className='all-cards'>
          {
            data ? (
              data.map((e) => (
                <PostCard
                  key={e.id}
                  title={e.title}
                  userId={e.userId}
                  body={e.body}
                  id={e.id}
                />
              ))
            ) : (
              <h1>Loading....</h1>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
