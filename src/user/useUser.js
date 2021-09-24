import {api} from 'api';
import {useEffect, useState} from 'react';

export function useUser(id) {
  const [user, setUser] = useState();

  async function getUser() {
    try {
      const res = await api.get('/user/' + id);
      setUser(res.data);
    } catch (err) {
      // console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return user;
}
