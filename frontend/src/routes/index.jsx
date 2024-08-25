import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LandingPage, SignupPage, LoginPage, DashBoard, NotFoundPage } from '../pages';
import { ErrorBoundary, MapComponent } from '../components';

const routes = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    children: [
      {
        path: '',
        element: (
          <ErrorBoundary>
            <LandingPage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'signup',
        element: (
          <ErrorBoundary>
            <SignupPage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'login',
        element: (
          <ErrorBoundary>
            <LoginPage />
          </ErrorBoundary>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <ErrorBoundary>
            <MapComponent/>
          </ErrorBoundary>
        ),
      },
    
      {
        path: '*',
        element: (
          <ErrorBoundary>
            <NotFoundPage />
          </ErrorBoundary>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
