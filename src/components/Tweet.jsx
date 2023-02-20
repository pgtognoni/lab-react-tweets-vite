import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";


function Tweet({ tweet, index }) {

  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet" key={index}>
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name}  handle={user.handle} />
          <Timestamp timestamp={timestamp} />
        </div>
      <Message message={message} />
      <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
