import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../routes/path';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { userApi } from '../../../apis/user.api';
import { useAppDispatch } from '../../../store/hooks';
import { setCurrentUser } from '../../../store/slices/user.slice';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required('Email không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp')
    .required('Vui lòng xác nhận mật khẩu'),
  name: yup.string().required('Tên không được để trống'),
  phone: yup.string().required('Số điện thoại không được để trống'),
});

type FormValues = yup.InferType<typeof schema>;

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      phone: '',
    },
    resolver: yupResolver(schema),
  });

  const { mutate: handleRegister, isLoading } = useMutation({
    mutationFn: (body: Omit<FormValues, 'confirmPassword'>) => userApi.register(body),
    onSuccess: (currentUser) => {
      dispatch(setCurrentUser(currentUser));
    },
  });

  const onSubmit = (formValues: FormValues) => {
    const { confirmPassword, ...dataToSend } = formValues; // Loại bỏ confirmPassword
    handleRegister(dataToSend);
    console.log(dataToSend);
  };

  return (
    <Box
      width="100%"
      maxWidth="350px"
      display="flex"
      alignItems="center"
      mt={20}
      justifyContent="center"
      height="40vh"
      bgcolor="#fff"
    >
      <Box
        width="100%"
        p={4}
        bgcolor="#e0ebef"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="12px"
      >
        <Typography
          fontSize={32}
          fontWeight={700}
          textAlign="center"
          component="h4"
          color="#1dbf73"
          mb={2}
        >
          SIGN UP
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              {...register('email')}
              fullWidth
              label="Email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register('password')}
              fullWidth
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              {...register('confirmPassword')}
              fullWidth
              label="Confirm Password"
              type="password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <TextField
              {...register('name')}
              fullWidth
              label="Name"
              type="name"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              {...register('phone')}
              fullWidth
              label="Phone"
              type="phone"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <Box display="flex">
              <LoadingButton
                disabled={isLoading}
                fullWidth
                variant="contained"
                type="button"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(PATH.AUTH.LOGIN)}
                sx={{
                  borderRadius: '24px',
                  backgroundColor: '#1dbf73',
                  '&:hover': {
                    backgroundColor: '#17a963',
                  },
                }}
              >
                Đăng nhập
              </LoadingButton>
              <Button
                fullWidth
                variant="outlined"
                type="submit"
                sx={{
                  borderRadius: '24px',
                  color: '#fff',
                  backgroundColor: '#1dbf73',
                  '&:hover': {
                    backgroundColor: '#17a963',
                  },
                }}
              >
                Đăng kí
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
