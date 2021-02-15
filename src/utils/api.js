import env from 'react-dotenv';

class Api {
  constructor({ url }) {
    this._url = url;
  }

  _checkErrors(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Something is wrong: 4 8 15 16 23 42 && ${res.status} ${res.statusText}`);
  }

  createUser(email, password, name) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then(this._checkErrors);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(this._checkErrors);
  }

  getCurrentUser(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkErrors);
  }
}

const api = new Api({
  url: env.API_URL,
});

export default api;
