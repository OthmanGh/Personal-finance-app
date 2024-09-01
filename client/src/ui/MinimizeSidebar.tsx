import { sidebarContent, smallLogo, vector } from '../constants';
import { NavLink } from 'react-router-dom';

type MinimizeSidebarProps = {
  onToggle: () => void;
};

const MinimizeSidebar = ({ onToggle }: MinimizeSidebarProps) => {
  return (
    <aside className="min-h-screen bg-primary-grey-900 w-[88px] rounded-r-[16px] flex flex-col items-center justify-between pb-400">
      <div className="flex flex-col py-500 px-300 gap-300">
        <div className="flex items-center justify-center h-[101.44px]">
          <img src={smallLogo} alt="f logo" className="" />
        </div>

        <ul>
          {sidebarContent.map((item) => (
            <NavLink to={item.to}>
              <img src={item.src} key={item.id} className="py-300" />
            </NavLink>
          ))}
        </ul>
      </div>

      <img src={vector} alt="expand sidebar logo" className="cursor-pointer" onClick={onToggle} />
    </aside>
  );
};

export default MinimizeSidebar;
