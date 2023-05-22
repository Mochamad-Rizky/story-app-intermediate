import instance from '../lib/axios';
import Token from './token';

const api = (() => {
  const getStories = async () => {
    try {
      const response = await instance.get('/stories', {
        headers: {
          Authorization: `Bearer ${Token.get()}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response));
    }
  };

  const getDetailStory = async (id) => {
    try {
      const response = await instance.get(`/stories/${id}`, {
        headers: {
          Authorization: `Bearer ${Token.get()}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error.response));
    }
  };

  const postStory = async ({ description, photo }) => {
    try {
      const response = await instance.post(
        '/stories',
        {
          description,
          photo,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${Token.get()}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response));
    }
  };

  const postStoryAsGuest = async ({ description, photo }) => {
    try {
      const response = await instance.post(
        '/stories/guest',
        {
          description,
          photo,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response));
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await instance.post('/login', {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response));
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await instance.post('/register', {
        name,
        email,
        password,
      });

      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response));
    }
  };

  return {
    getStories,
    postStory,
    login,
    register,
    getDetailStory,
    postStoryAsGuest,
  };
})();

export default api;
