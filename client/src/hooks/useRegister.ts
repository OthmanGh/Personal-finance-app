import { useForm } from 'react-hook-form';
import { signupSchema, loginSchema, api } from '../constants';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/authentication/authSlice';

const useRegister = (isSignup: boolean) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    try {
      const endpoint = isSignup ? 'signup' : 'login';

      const res = await api.post(endpoint, data);

      if (res.data.status === 'success') {
        dispatch(setToken(res.data.token));
        navigate('/overview');
        reset();
      }
    } catch (error: any) {
      const backendResponse = error.response?.data?.message || 'Something went wrogn';

      setError('root', {
        message: backendResponse,
      });
    }
  };

  return { onSubmit, register, handleSubmit, errors, isSubmitting };
};

export default useRegister;
