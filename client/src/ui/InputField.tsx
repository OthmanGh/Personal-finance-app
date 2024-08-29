import { showPasswordIcon } from '../constants';
import Input from './Input';

type InputFieldProps = {
  type: string;
  id: string;
  isPassword?: boolean;
  passwordTerms?: boolean;
  onChange?: () => void;
};

const InputField = ({ type, id, isPassword = false, passwordTerms = false, onChange }: InputFieldProps) => {
  return (
    <div>
      <div className="border-[1px] border-primary-grey-500 rounded-[8px] w-full px-250 py-150 relative">
        <Input type={type} id={id} onChange={onChange} />
        {isPassword && <img src={showPasswordIcon} alt="eye password icon" className="absolute right-3 top-5" />}
      </div>
      {passwordTerms && <p className="text-preset-5 text-end mt-50">Passwords must be at least 8 characters</p>}
    </div>
  );
};

export default InputField;
