class MainApi {
  constructor({ baseUrlOrders, baseUrlSales, headers, token }) {
    this._baseUrlOrders = baseUrlOrders;
    this._baseUrlSales = baseUrlSales;
    this._headers = headers;
    this._token = token;
  }

  getOrders(data) {
    return fetch(`${this._baseUrlOrders}${data.data.date}T${data.timeNow2}:00.000Z&flag=1&key=${this._token}`, {
      method: "GET",
    }).then(res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status} : ${res.statusText}`)));
  }

  getSales(data) {
    return fetch(`${this._baseUrlSales}${data.data.date}T${data.timeNow2}:00.000Z&flag=1&key=${this._token}`, {
      method: "GET",
    }).then(res => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status} : ${res.statusText}`)));
  }



}

const config = {
  baseUrlOrders: 'https://suppliers-stats.wildberries.ru/api/v1/supplier/orders?dateFrom=',
  baseUrlSales: 'https://suppliers-stats.wildberries.ru/api/v1/supplier/sales?dateFrom=',
  headers: { "Content-Type": "application/json" },
  token: 'MjJkNDg0ZTAtYjQ0YS00YzUzLWFlOTEtNWY3ZDRhYzM4YmNm',
};

const mainApi = new MainApi(config);
export default mainApi;