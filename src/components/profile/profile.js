import "./profile.css"

const Profile = () => {
  return (
    <div className='content'>

      <div className='hero-image'>
        <img src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1&resize=640%2C360'></img>
      </div>

      <div className='profile-img'>

        <img src="https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-qpc-deluxe-burger:1-3-product-tile-desktop?wid=829&hei=515&dpr=off"></img>

      </div>

      <div className='description'>
        <p>tässä on sitten tekstiä</p>
      </div>

      <div className="my-posts">
        <h3>My posts</h3>

        <div className="create-post">
          <p>create post</p>
        </div>

        <div className="my-single-post">
          <p>postaus</p>
        </div>
      </div>

    </div>
  );
}

export default Profile;