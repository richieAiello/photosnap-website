import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json').then(response => {
      setData([...response.data]);
    });
  }, []);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
