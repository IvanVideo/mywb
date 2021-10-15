class MainApi {
  constructor({ baseUrl, headers, token }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = token;
  }

  getOrders(data) {
    // console.log(`${this._baseUrl}${data.date}T${data.time}:00.000Z&flag=0&key=${this._token}`, '000')
    return fetch(`${this._baseUrl}${data.date}T${data.time}:00.000Z&flag=1&key=${this._token}`, {
      method: "GET",
    }).then(res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status} : ${res.statusText}`)));
  }

  getSales(data) {
    return fetch(`${this._baseUrl}${data.date}T${data.time}:00.000Z&flag=1&key=${this._token}`, {
      method: "GET",
    }).then(res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status} : ${res.statusText}`)));
  }



}

const config = {
  baseUrl: 'https://suppliers-stats.wildberries.ru/api/v1/supplier/orders?dateFrom=',
  headers: { "Content-Type": "application/json" },
  token: 'MjJkNDg0ZTAtYjQ0YS00YzUzLWFlOTEtNWY3ZDRhYzM4YmNm',
};

const mainApi = new MainApi(config);
export default mainApi;