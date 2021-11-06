import './App.css';
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import React, { useEffect, useCallback } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Orders from '../Orders/Orders';
import mainApi from '../../utils/api';

function App() {
  const [arrCardsOrder, setArrCardsOrder] = React.useState([]);
  const [arrCardsSales, setArrCardsSales] = React.useState([]);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  let timeNow = new Date();
  let hour = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let timeNow2 = hour + ':' + minutes;

  const getOrders = (data) => {
    if (data.date === today) {
      mainApi.getOrders({ data, timeNow2 })
        .then((items) => {
          setArrCardsOrder(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let timeNow2 = '23:59';
      mainApi.getOrders({ data, timeNow2 })
        .then((items) => {
          setArrCardsOrder(items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const getSales = (data) => {
    console.log('1111')
    if (data.date === today) {
      mainApi.getSales({ data, timeNow2 })
        .then((items) => {
          console.log(items, 'заказы')
          setArrCardsSales(items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let timeNow2 = '23:59';
      mainApi.getSales({ data, timeNow2 })
        .then((items) => {
          console.log(items, 'продажи')
          setArrCardsSales(items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Main path='/' getOrders={getOrders} arrCardsOrder={arrCardsOrder} arrCardsSales={arrCardsSales} getSales={getSales} />
      </Switch>
    </div>
  );
}

export default App;
