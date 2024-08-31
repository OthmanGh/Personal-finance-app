import { iconsMinimizeMenu } from '../constants';

const MinimizeMenu = () => {
  return (
    <div className="hidden lg:flex gap-200 px-400 py-500 cursor-pointer text-primary-grey-300 hover:text-primary-beige-light transition-all duration-300">
      <img src={iconsMinimizeMenu} />
      <p>Minimize Menu</p>
    </div>
  );
};

export default MinimizeMenu;
