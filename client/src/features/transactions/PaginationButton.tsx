type PaginationButtonProps = {
  onClick: () => void;
  disabled: boolean;
  icon: string;
  label: string;
};

const PaginationButton = ({ onClick, disabled, icon, label }: PaginationButtonProps) => {
  return (
    <button
      className="flex items-center gap-200 px-200 py-100 border-primary-grey-500 border-2 border-opacity-50 rounded-lg hover:border-opacity-100 transition-all duration-500 disabled:bg-primary-grey-300 disabled:border-primary-grey-300 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {label === 'Next' ? (
        <>
          <p>{label}</p>
          <img src={icon} alt={`${label} icon`} />
        </>
      ) : (
        <>
          <img src={icon} alt={`${label} icon`} />
          <p>{label}</p>
        </>
      )}
    </button>
  );
};

export default PaginationButton;
