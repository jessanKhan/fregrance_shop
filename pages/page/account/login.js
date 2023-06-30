import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Label, Input, Col } from 'reactstrap';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from '../../../app/redux/slice/authSlice'
import { useRouter } from "next/router";
import { fakedata } from '../../../app/redux/slice/authSlice';
import {login} from '../../../app/apis/auth/index'
import { saveUserIdToCookie,saveUserTokenToCookie } from '../../../app/apis/cookies';
import { useSnackbar } from 'react-simple-snackbar'

const Login = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [open,close] = useSnackbar()
  const loginhandler = (values) => {
    login(values).then((res) => {
        console.log(res, "login data")
       saveUserIdToCookie(res.data.uid)
       saveUserTokenToCookie(res.data.accessToken)
       open("Logged In successfully")
    router.push("/page/account/dashboard"); 
    }).catch((err) => {
        open("Error logging in")
    })
   
  };

  return (
    <CommonLayout parent="home" title="login">
      <section className="login-page section-b-space">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Login</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email("Invalid email").required("Email is required"),
                    password: Yup.string().required("Password is required"),
                  })}
                  onSubmit={async (values, { setSubmitting }) => {
                    loginhandler(values);
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="theme-form">
                      <div className="form-group">
                        <Label className="form-label" htmlFor="email">
                          Email
                        </Label>
                        <Field
                          type="text"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required=""
                        />
                        <ErrorMessage name="email" component="div" className="error-message" />
                      </div>
                      <div className="form-group">
                        <Label className="form-label" htmlFor="password">
                          Password
                        </Label>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter your password"
                          required=""
                        />
                        <ErrorMessage name="password" component="div" className="error-message" />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="btn btn-solid">
                        {isSubmitting ? "Submitting..." : "Login"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col lg="6" className="right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create An Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to
                  order from our shop. To start shopping, click register.
                </p>
                <a href="/page/account/register" className="btn btn-solid">
                  Create an Account
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Login;
