import './Orders.css';
import React, { useEffect, useCallback } from "react";
import Card from '../Card/Card';

function Orders(props) {
  const [values, setValues] = React.useState({});

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  }

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    props.getOrders({ ...values })
  }

  useEffect(() => {
  }, [values])

  return (
    <section>
      <h1 className='orders__title'>Заказы</h1>
      <div className='orders__conteiner conteiner'>
        <div className='conteiner__left'>
          <form className='orders__form' onSubmit={handleSubmitFrom} >
            <input className='orders__input' name='date' type='date' onChange={handleChange} />
            <input className='orders__input' name='time' type='time' onChange={handleChange} />
            <button className='orders__button' type='submit'>GO</button>
          </form>
        </div>
        <div className='conteiner__rigth'>
          {
            props.arrCards.map(item => (
              <Card
                item={item}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Orders;