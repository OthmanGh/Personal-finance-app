import { UseFormRegister } from 'react-hook-form';

type inputProps = {
  type: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<any>;
};

const Input = ({ type, id, onChange, register }: inputProps) => {
  return <input className="border-none outline-none focus:outline-none w-[100%] font-bold" type={type} id={id} {...register(id)} />;
};

export default Input;
