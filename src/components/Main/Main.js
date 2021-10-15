import './Main.css';
import React, { useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';

function Main(props) {
    const [values, setValues] = React.useState({});
    const [mounTeaOrder, setMounTeaOrder] = React.useState({});
    const [meronOrder, setMeronOrder] = React.useState({});
    const [mananaOrder, setMananaOrder] = React.useState({});
    const [fiberOrder, setFiberOrder] = React.useState({});
    const [coffeeOrder, setCoffeeOrder] = React.useState({});
    const [mounTeaSales, setMounTeaSales] = React.useState({});
    const [meronSales, setMeronSales] = React.useState({});
    const [mananaSales, setMananaSales] = React.useState({});
    const [fiberSales, setFiberSales] = React.useState({});
    const [coffeeSales, setCoffeeSales] = React.useState({});

    const handleChangeOrder = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
    }

    const handleChangeSales = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
    }

    const handleSubmitFromOrder = (e) => {
        e.preventDefault();
        props.getOrders({ ...values })
    }

    const handleSubmitFromSales = (e) => {
        e.preventDefault();
        props.getSales({ ...values })
    }

    useEffect(() => {
        if (props.arrCardsOrder.length > 0) {
            let mounTeaArr = props.arrCardsOrder.filter(item => (
                item.brand === 'MounTea'
            ))
            let meronArr = props.arrCardsOrder.filter(item => (
                item.brand === 'MERON Tea'
            ))
            let mananaArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Manana Tea'
            ))
            let coffeeArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Coffee Grounds'
            ))
            let fiberArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Manana Tea'
            ))
            setMounTeaOrder(mounTeaArr)
            setMeronOrder(meronArr)
            setMananaOrder(mananaArr)
            setCoffeeOrder(coffeeArr)
            setFiberOrder(fiberArr)
        }
        if (props.arrCardsSales.length > 0) {
            let mounTeaArrSale = props.arrCardsOrder.filter(item => (
                item.brand === 'MounTea'
            ))
            console.log(mounTeaArrSale, 'sale1')
            let meronArr = props.arrCardsOrder.filter(item => (
                item.brand === 'MERON Tea'
            ))
            let mananaArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Manana Tea'
            ))
            let coffeeArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Coffee Grounds'
            ))
            let fiberArr = props.arrCardsOrder.filter(item => (
                item.brand === 'Manana Tea'
            ))
            setMounTeaSales(mounTeaArrSale)
            setMeronSales(meronArr)
            setMananaSales(mananaArr)
            setCoffeeSales(coffeeArr)
            setFiberSales(fiberArr)
        } else {
            return
        }
    }, [values, props.arrCardsOrder, props.arrCardsSales])

    return (
        <section className='main'>
            <div className='main__column'>
                <div className='main__cell main__cell1'>
                    <p className='main__title'>ЗАКАЗЫ</p>
                    <div className='main__box'>
                        <form className='main__form form' onSubmit={handleSubmitFromOrder} >
                            <input className='main__input form__item' name='date' type='date' onChange={handleChangeOrder} />
                            <input className='main__input form__item' name='time' type='time' onChange={handleChangeOrder} />
                            <button className='main__button form__item' type='submit'>GO</button>
                        </form>
                        {
                            props.arrCardsOrder.length > 0
                                ? <div className='main__content'>
                                    <div className='main__text main__text1 main__title-cell'>бренд</div>
                                    <div className='main__text main__text2 main__title-cell'>кол-во</div>
                                    {
                                        mounTeaOrder.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>MounTea</p></div>
                                            : null
                                    }
                                    {
                                        mounTeaOrder.length > 0
                                            ? <div className='main__text'><p className='main__count'>{mounTeaOrder.length}</p></div>
                                            : null
                                    }
                                    {
                                        meronOrder.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>MERON Tea</p></div>
                                            : null
                                    }
                                    {
                                        meronOrder.length > 0
                                            ? <div className='main__text'><p className='main__count'>{meronOrder.length}</p></div>
                                            : null
                                    }
                                    {
                                        mananaOrder.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>Manana Tea</p></div>
                                            : null
                                    }
                                    {
                                        mananaOrder.length > 0
                                            ? <div className='main__text'><p className='main__count'>{mananaOrder.length}</p></div>
                                            : null
                                    }
                                    {
                                        fiberOrder.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>FiberGel</p></div>
                                            : null
                                    }
                                    {
                                        fiberOrder.length > 0
                                            ? <div className='main__text'><p className='main__count'>{fiberOrder.length}</p></div>
                                            : null
                                    }
                                    {
                                        coffeeOrder.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>CoffeeGround</p></div>
                                            : null
                                    }
                                    {
                                        coffeeOrder.length > 0
                                            ? <div className='main__text'><p className='main__count'>{coffeeOrder.length}</p></div>
                                            : null
                                    }

                                    {/* <div className='main__text main__text1 main__title-cell'>бренд</div>
                            <div className='main__text main__text2 main__title-cell'>кол-во</div>
                            <div className='main__text main__brend'><p className='main__brend'>MounTea</p></div>
                            <div className='main__text'><p className='main__count'>{mounTea.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>MERON Tea</p></div>
                            <div className='main__text'><p className='main__count'>{meron.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>Manana Tea</p></div>
                            <div className='main__text'><p className='main__count'>{manana.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>FiberGel</p></div>
                            <div className='main__text'><p className='main__count'>{fiber.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>CoffeeGround</p></div>
                            <div className='main__text'><p className='main__count'>{coffee.length}</p></div> */}
                                </div>
                                : null
                        }
                    </div>
                </div>
                <div className='main__cell main__cell2'>
                    <p className='main__title'></p>
                </div>
            </div>
            <div className='main__column'>
                <div className='main__cell main__cell3'>
                    <p className='main__title'>ПРОДАЖИ</p>
                    <div className='main__box'>
                        <form className='main__form form' onSubmit={handleSubmitFromSales} >
                            <input className='main__input1 form__item' name='date' type='date' onChange={handleChangeSales} />
                            <input className='main__input1 form__item' name='time' type='time' onChange={handleChangeSales} />
                            <button className='main__button1 form__item' type='submit'>GO</button>
                        </form>
                        {
                            props.arrCardsSales.length > 0
                                ? <div className='main__content'>
                                    <div className='main__text main__text1 main__title-cell'>бренд</div>
                                    <div className='main__text main__text2 main__title-cell'>кол-во</div>
                                    {
                                        mounTeaSales.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>MounTea</p></div>
                                            : null
                                    }
                                    {
                                        mounTeaSales.length > 0
                                            ? <div className='main__text'><p className='main__count'>{mounTeaSales.length}</p></div>
                                            : null
                                    }
                                    {
                                        meronSales.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>MERON Tea</p></div>
                                            : null
                                    }
                                    {
                                        meronSales.length > 0
                                            ? <div className='main__text'><p className='main__count'>{meronSales.length}</p></div>
                                            : null
                                    }
                                    {
                                        mananaSales.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>Manana Tea</p></div>
                                            : null
                                    }
                                    {
                                        mananaSales.length > 0
                                            ? <div className='main__text'><p className='main__count'>{mananaSales.length}</p></div>
                                            : null
                                    }
                                    {
                                        fiberSales.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>FiberGel</p></div>
                                            : null
                                    }
                                    {
                                        fiberSales.length > 0
                                            ? <div className='main__text'><p className='main__count'>{fiberSales.length}</p></div>
                                            : null
                                    }
                                    {
                                        coffeeSales.length > 0
                                            ? <div className='main__text main__brend'><p className='main__brend'>CoffeeGround</p></div>
                                            : null
                                    }
                                    {
                                        coffeeSales.length > 0
                                            ? <div className='main__text'><p className='main__count'>{coffeeSales.length}</p></div>
                                            : null
                                    }

                                    {/* <div className='main__text main__text1 main__title-cell'>бренд</div>
                            <div className='main__text main__text2 main__title-cell'>кол-во</div>
                            <div className='main__text main__brend'><p className='main__brend'>MounTea</p></div>
                            <div className='main__text'><p className='main__count'>{mounTea.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>MERON Tea</p></div>
                            <div className='main__text'><p className='main__count'>{meron.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>Manana Tea</p></div>
                            <div className='main__text'><p className='main__count'>{manana.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>FiberGel</p></div>
                            <div className='main__text'><p className='main__count'>{fiber.length}</p></div>
                            <div className='main__text main__brend'><p className='main__brend'>CoffeeGround</p></div>
                            <div className='main__text'><p className='main__count'>{coffee.length}</p></div> */}
                                </div>
                                : null
                        }
                    </div>
                </div>
                <div className='main__cell main__cell4'>
                    <p className='main__title'></p>
                </div>
            </div>
        </section>
    );
}

export default Main;