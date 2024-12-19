import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../routes/path";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { userApi } from "../../../apis/user.api";
import { useAppDispatch } from "../../../store/hooks";
import { setCurrentUser } from "../../../store/slices/user.slice";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("Email không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống"),
});

type FormValues = yup.InferType<typeof schema>;

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: handleLogin, isLoading  } = useMutation({
    mutationFn: (body: FormValues) => userApi.login(body),
    onSuccess: (currentUser) => {
      dispatch(setCurrentUser(currentUser));
    },
  });

  const onSubmit = (formValues: FormValues) => {
    handleLogin(formValues);
  };

  return (
    <Box
      width="100%"
      maxWidth="350px"
      display="flex"
      alignItems="center"
      mt={10}
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
          SIGN IN
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} >
          <TextField
            {...register("email")}
            fullWidth
            placeholder="Enter your email"
            label="Email"
            name="email"
            variant="outlined"
          />
          <TextField
            {...register("password")}
            fullWidth
            placeholder="Enter your password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
          />
          <Box display="flex" gap={2}>
            <LoadingButton
            disabled={isLoading}
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                borderRadius: "24px",
                backgroundColor: "#1dbf73",
                "&:hover": {
                  backgroundColor: "#17a963",
                },
              }}
            >
              Đăng nhập
            </LoadingButton>
            <Button
              fullWidth
              variant="outlined"
              type="button"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(PATH.AUTH.REGISTER)}
              sx={{
                borderRadius: "24px",
                color: "#fff",
                backgroundColor: "#1dbf73",
                "&:hover": {
                  backgroundColor: "#17a963",
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

export default LoginPage;
