import React from 'react';
import { Header, Footer } from './layouts';
import { Outlet } from 'react-router-dom';
import { background } from './assets';
import { ProgressLoader } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, stopLoading } from './store/slices/loaderSlice';

const App = () => {
  const loading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();

  const handleLoading = () => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
    }, 5000);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      {loading && <ProgressLoader />}
      <main className="flex-1 overflow-auto">
        <Outlet />
        <button
          onClick={handleLoading}
          className="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Loading
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
