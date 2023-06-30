import React,{useEffect} from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Label, Col } from 'reactstrap';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {useDispatch, useSelector} from "react-redux";
import {registerUser,testing} from '../../../app/redux/slice/authSlice'
import {signup} from '../../../app/apis/auth/index'

import { useSnackbar } from 'react-simple-snackbar'
const Register = () => {
  const router = useRouter();
  const [open, close] = useSnackbar()

  const signuphandler = (values) => {

    signup(values).then((res)=>{
      open("Registered Successfully!")
      router.push("/page/account/login"); 
    }).catch(err=> {
      open("Error during registration")
    })
  }
  useEffect(()=>{
    // dispatch(testing())
  },[])

  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("First Name is required"),
                    lastName: Yup.string().required("Last Name is required"),
                    email: Yup.string().email("Invalid email").required("Email is required"),
                    password: Yup.string().required("Password is required"),
                  })}
                  onSubmit={async (values) => {
                    signuphandler(values);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="theme-form">
                      <Row>
                        <Col md="6">
                          <Label className="form-label" for="fname">First Name</Label>
                          <Field type="text" className="form-control" id="fname" name='firstName' />
                          <ErrorMessage name="firstName" component="div" className="text-danger" />
                        </Col>
                        <Col md="6">
                          <Label className="form-label" for="lname">Last Name</Label>
                          <Field type="text" className="form-control" id="lname" name='lastName' />
                          <ErrorMessage name="lastName" component="div" className="text-danger" />
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <Label className="form-label" for="email">Email</Label>
                          <Field type="email" className="form-control" id="email" name="email" />
                          <ErrorMessage name="email" component="div" className="text-danger" />
                        </Col>
                        <Col md="6">
                          <Label className="form-label" for="password">Password</Label>
                          <Field type="password" className="form-control" id="password" name='password' />
                          <ErrorMessage name="password" component="div" className="text-danger" />
                        </Col>
                        <Col md="12">
                          <button type='submit' className="btn btn-solid w-auto" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Create Account"}
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
}

export default Register;
