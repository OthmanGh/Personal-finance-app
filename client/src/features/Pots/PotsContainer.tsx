import { pots } from './dummy';
import { Pot } from '../../constants';

const PotsContainer = () => {
  return (
    <ul className="grid grid-cols-1 gap-300">
      {pots.map((pot) => (
        <Pot pot={pot} key={pot.name} />
      ))}
    </ul>
  );
};

export default PotsContainer;
