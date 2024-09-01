import { iconsMinimizeMenu } from '../constants';

type MinimizeProps = {
  onToggle: () => void;
};

const MinimizeMenu = ({ onToggle }: MinimizeProps) => {
  return (
    <div className="hidden lg:flex gap-200 px-400 py-500 cursor-pointer text-primary-grey-300 hover:text-primary-beige-light" onClick={onToggle}>
      <img src={iconsMinimizeMenu} />
      <p>Minimize Menu</p>
    </div>
  );
};

export default MinimizeMenu;
