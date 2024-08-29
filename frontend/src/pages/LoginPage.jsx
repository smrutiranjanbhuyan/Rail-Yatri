import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { startLoading, stopLoading } from '../store/slices/loaderSlice';
import { login } from '../store/slices/authSlice';
import {useNavigate, Link} from 'react-router-dom'


const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const SignInPage = () => {
  const [message, setMessage] = useState(null);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSignIn = async (values, { setSubmitting }) => {
    dispatch(startLoading());
    try {
      const response = await axios.post("http://localhost:8000/api/login", values);
      dispatch(login({
        userId: response.data.user._id,
        email: response.data.user.email
      }));
      setMessage({ text: "Sign-in successful", type: "success" });
      navigate('/')
    } catch (error) {
      setMessage({ text: error.response?.data?.message || "An error occurred during sign-in.", type: "error" });
    } finally {
      setSubmitting(false);
      dispatch(stopLoading());
    }
  };

  return (
    <div className='flex items-center justify-center mt-20 mb-5'>
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 ${
          darkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900'
        }`}
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome Back
        </h1>
        {message && (
          <div
            className={`mb-4 p-4 rounded-md text-center ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={handleSignIn}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-2"
                >
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email && touched.email
                      ? 'border-red-500'
                      : darkMode
                      ? 'bg-gray-900 text-gray-300 border-gray-700'
                      : 'bg-gray-100 text-gray-900 border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-medium mb-2"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.password && touched.password
                      ? 'border-red-500'
                      : darkMode
                      ? 'bg-gray-900 text-gray-300 border-gray-700'
                      : 'bg-gray-100 text-gray-900 border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                  darkMode ? 'hover:bg-blue-500' : ''
                }`}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center">
          <span className="text-sm">
            Don't have an account?{' '}
          </span>
          <Link to={'/signup'} className="text-blue-600 hover:text-blue-700 font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
