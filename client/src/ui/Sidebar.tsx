import NavSidebar from './NavSidebar';
import { logo } from '../constants';
import MinimizeMenu from './MinimizeMenu';

type SidebarProps = {
  onToggle: () => void;
};

const Sidebar = ({ onToggle }: SidebarProps) => {
  return (
    <aside className="w-full  sticky bottom-0 rounded-t-xl bg-primary-grey-900 text-white lg:min-h-screen overflow-hidden lg:flex lg:flex-col lg:w-[300px] lg:justify-between lg:rounded-t-none lg:rounded-e-xl transition-all duration-400">
      <div>
        <img src={logo} alt="finance logo" className="hidden lg:block px-400 py-500" />
        <NavSidebar />
      </div>

      <MinimizeMenu onToggle={onToggle} />
    </aside>
  );
};

export default Sidebar;
