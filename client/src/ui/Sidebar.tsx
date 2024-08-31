import NavSidebar from './NavSidebar';
import { logo } from '../constants';
import MinimizeMenu from './MinimizeMenu';
const Sidebar = () => {
  return (
    <aside className="bg-primary-grey-900 text-white lg:h-[100vh] lg:w-[300px] overflow-hidden lg:rounded-r-xl lg:flex lg:flex-col lg:justify-between">
      <div>
        <img src={logo} alt="finance logo" className="hidden lg:block px-400 py-500" />
        <NavSidebar />
      </div>

      <MinimizeMenu />
    </aside>
  );
};

export default Sidebar;
