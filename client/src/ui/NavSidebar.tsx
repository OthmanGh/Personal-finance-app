import { NavLink } from 'react-router-dom';
import { sidebarContent } from '../constants';

const NavSidebar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center pt-100 px-100 sm:px-500 lg:px-0 lg:flex-col lg:items-start">
        {sidebarContent.map((item) => (
          <NavLink
            to={item.to}
            key={item.id}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer h-[44px] w-[68.6px] sm:h-[66px] sm:w-[104px] lg:w-[276px] lg:h-[56px] lg:flex-row lg:items-center lg:justify-start lg:gap-200 lg:px-400 sm:pb-100 sm:pt-150 sm:gap-50 ${
                isActive
                  ? 'text-primary-grey-900 bg-primary-beige-light border-b-secondary-green border-b-[4px] rounded-t-[8px] lg:border-b-0 lg:border-l-[6px] lg:border-l-secondary-green lg:rounded-r-xl lg:rounded-l-none'
                  : 'text-primary-grey-300'
              } `
            }
          >
            <img src={item.src} className="w-[18px] h-[18px] self-center" />
            <p className="hidden sm:block text-preset-5 font-bold lg:self-center lg:text-preset-3">{item.text}</p>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavSidebar;
