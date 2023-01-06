import { overviews } from '../../data';
import Stat from './Stat';
function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
      {overviews &&
        overviews.length > 0 &&
        overviews.map(overview => <Stat key={overview.id} {...overview} />)}
    </div>
  );
}

export default Stats;
