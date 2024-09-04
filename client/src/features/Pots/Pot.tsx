import { iconEllipsis } from '../../constants';

interface Pot {
  name: string;
  target: number;
  total: number;
  theme: string;
}

type PotProps = {
  pot: Pot;
};

const Pot = ({ pot }: PotProps) => {
  const backgroundColor = pot.theme;

  return (
    <li className="bg-white py-300 px-250 rounded-xl">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-200">
          <div
            className="h-[16px] w-[16px] rounded-full"
            style={{
              backgroundColor: backgroundColor,
            }}
          ></div>
          <p className="text-preset-2 font-bold">{pot.name}</p>
        </div>
        <img src={iconEllipsis} className="w-200 h-[150] cursor-pointer" />
      </div>
    </li>
  );
};

export default Pot;
