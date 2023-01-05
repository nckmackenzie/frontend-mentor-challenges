import { followers } from '../../data';
import Card from './Card';
function Cards() {
  return (
    <div className="mt-4 flex flex-col md:flex-row gap-4 absolute left-0 w-full">
      {followers &&
        followers.length > 0 &&
        followers.map(follower => <Card key={follower.social} {...follower} />)}
    </div>
  );
}

export default Cards;
