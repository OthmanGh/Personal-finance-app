import { UseFormRegister } from 'react-hook-form';
import { hidePasswordIcon, showPasswordIcon } from '../constants';
import Input from './Input';
import { useState } from 'react';

type InputFieldProps = {
  type: string;
  id: string;
  isPassword?: boolean;
  passwordTerms?: boolean;
  register?: UseFormRegister<any>;
  onChange?: () => void;
  validation?: object;
};

const InputField = ({ type, id, isPassword = false, onChange, register, validation }: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div>
      <div className="border-[1px] border-primary-grey-500 rounded-[8px] w-full px-250 py-150 relative">
        <Input type={inputType} id={id} onChange={onChange} register={register} validation={validation} />
        {isPassword && (
          <img
            src={showPassword ? showPasswordIcon : hidePasswordIcon}
            alt="eye password icon"
            className="absolute right-3 top-5 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
