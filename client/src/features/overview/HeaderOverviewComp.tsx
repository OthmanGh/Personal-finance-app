import { useNavigate } from 'react-router-dom';
import { iconCaretRight } from '../../constants';

type HeaderOverviewCompProps = {
  title: string;
  to: string;
};

const HeaderOverviewComp = ({ title, to }: HeaderOverviewCompProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between ">
      <h2 className="text-preset-2">{title}</h2>
      <div className="flex items-center justify-center gap-150 cursor-pointer" onClick={() => navigate(`/${to}`)}>
        <p className="text-preset-4 text-primary-grey-500 font-light">See Details</p>
        <img src={iconCaretRight} alt="caret left icon" />
      </div>
    </div>
  );
};

export default HeaderOverviewComp;
