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


  const getOrders = (data) => {
    mainApi.getOrders(data)
      .then((items) => {
        setArrCardsOrder(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getSales = (data) => {
    mainApi.getSales(data)
      .then((items) => {
        setArrCardsSales(items);
      })
      .catch((err) => {
        console.log(err);
      });
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
