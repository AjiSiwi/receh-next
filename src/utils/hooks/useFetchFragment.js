import { useEffect, useState } from 'react';

export default function useFetchFragment(id) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getMoneyById = async () => {
      const response = await fetch(`https://receh-database.herokuapp.com/fragments?change_money=${id}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    if (id) {
        getMoneyById();
    }
  }, [id]);
  return {
    data,
    isLoading,
  };
}
