import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeClosed, cilLockLocked, cilUser } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { loginUser, useUserDispatch } from "../../context/UserContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  var userDispatch = useUserDispatch();

  var [isLoading, setIsLoading] = useState(false);

  // console.log(errors)
  const onSubmit = async (data) => {
    loginUser(userDispatch, data, navigate, setIsLoading, setError);
    // console.log
  };
  // const onSubmit = async (data) => {
  //   try {
  //     // const response = await axios.post(
  //     //   "http://localhost:9500/v1/admin/login",
  //     //   {
  //     //     email: data.email,
  //     //     password: data.password,
  //     //   },userDispatch,navigate,setIsLoading,setError
  //     // );

  //     console.log("Login successful:", response.data);
  //     localStorage.setItem("token", response.data.refreshToken);

  //     // Redirect to the dashboard
  //     navigate("/dashboard");
  //   } catch (err) {
  //     setError("password", {
  //       type: "manual",
  //       message: "Invalid username or password",
  //     });
  //     console.error("Login error:", err);
  //   }
  // };

  return (
    <div className="bg-light  min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4 col-md-7">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroup>
                        <CInputGroupText>
                          <CIcon icon={cilEnvelopeClosed} />
                        </CInputGroupText>
                        <Controller
                          name="email"
                          control={control}
                          defaultValue=""
                          rules={{ required: "Email is required" }}
                          render={({ field }) => (
                            <>
                              <CFormInput
                                {...field}
                                placeholder="Email"
                                autoComplete="email"
                                variant="outlined"
                              />
                            </>
                          )}
                        />
                      </CInputGroup>
                      {errors.email && (
                        <div className="error-msg mb-3">
                          {errors.email.message}
                        </div>
                      )}
                    </CInputGroup>
                    <CInputGroup>
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                          <>
                            <CFormInput
                              {...field}
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              variant="outlined" // Custom prop for the outlined variant
                            />
                          </>
                        )}
                      />
                    </CInputGroup>
                    {errors.password && (
                      <div className="error-msg mb-2">
                        {errors.password.message}
                      </div>
                    )}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6}  className="text-right">
                        <Link
                          to="/forgot-password"
                          className="btn btn-link px-0">
                          Forgot password?
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white col-md-5 bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
