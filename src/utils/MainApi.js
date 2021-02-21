import env from 'react-dotenv';

class MainApi {
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
    }).then(this._checkErrors);
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
    }).then(this._checkErrors);
  }

  getCurrentUser(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkErrors);
  }

  getSavedArticles() {
    return fetch(`${this._url}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this._checkErrors);
  }
  // urlToImage, publishedAt, title, description, source, url
  saveArticle(article, keyword) {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      }),
    }).then(this._checkErrors);
  }

  deleteArticle(articleId) {
    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this._checkErrors);
  }
}

const api = new MainApi({
  url: env.API_URL,
});

export default api;
