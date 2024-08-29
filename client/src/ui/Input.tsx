type inputProps = {
  type: string;
  id: string;
  onChange?: () => void;
};

const Input = ({ type, id, onChange }: inputProps) => {
  return <input className="border-none outline-none focus:outline-none w-[100%] font-bold" type={type} id={id} onChange={onChange} />;
};

export default Input;
