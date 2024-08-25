import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpPage = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className='flex items-center justify-center mt-20 mb-5'>
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 ${
          darkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-900'
        }`}
      >
        <h1 className="text-2xl font-semibold text-center mb-8">
          Create an Account
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            // Handle form submission here
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
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

              {/* Confirm Password Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium mb-2"
                >
                  Confirm Password:
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.confirmPassword && touched.confirmPassword
                      ? 'border-red-500'
                      : darkMode
                      ? 'bg-gray-900 text-gray-300 border-gray-700'
                      : 'bg-gray-100 text-gray-900 border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                  darkMode ? 'hover:bg-blue-500' : ''
                }`}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center">
          <span className="text-sm">
            Already have an account?{' '}
          </span>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
