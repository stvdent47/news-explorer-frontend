import env from 'react-dotenv';

class NewsApi {
  constructor({ newsApiUrl, newsApiKey }) {
    this._newsApiUrl = newsApiUrl;
    this._newsApiKey = newsApiKey;
  }

  _checkErrors(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Something is wrong: 4 8 15 16 23 42 && ${res.status} ${res.statusText}`);
  }

  getDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  getNews(keyword) {
    const dateNow = new Date();
    const dateFrom = new Date(dateNow.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dateFromForQuery = this.getDate(dateFrom);
    const dateToForQuery = this.getDate(dateNow);
    const queryUrl = `${this._newsApiUrl}q=${keyword}&language=ru&from=${dateFromForQuery}&to=${dateToForQuery}&sortBy=popularity&pageSize=100&apiKey=${this._newsApiKey}`;

    return fetch(queryUrl).then(this._checkErrors);
  }
}

const newsApi = new NewsApi({
  newsApiUrl: env.NEWSAPI_URL,
  newsApiKey: env.NEWSAPI_KEY,
});

export default newsApi;
