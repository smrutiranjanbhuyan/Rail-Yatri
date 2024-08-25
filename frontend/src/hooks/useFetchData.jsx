
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../store/slices/loaderSlice';
import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(startLoading());
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchData();
  }, [dispatch, url]);

  return { data, error };
};

export default useFetchData;
