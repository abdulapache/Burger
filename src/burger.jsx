import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Header from './header';


const Burger = () => {

    const burger = 3;

//Lettuce

const addL = () =>{
    setlettuce(lettuce+1);
    setlprice(lprice+2);
    // get current state of lettuce
    // plus one in state
    // again set the state trhough setState
}
const [lettuce, setlettuce] = useState(0);
 const lp = 0;
    const [lprice, setlprice] = useState(0);
const Lettuce = () => {
        let larray = [];
        for (let i = 0; i < lettuce; i++) {
            larray.push(<img src="lettuse.jpg" />,<br />)
        }
        return (
            larray
        );
    }
    const Lremove = () => {
        for(let i = lettuce; i > 0; i--){
        setlettuce(lettuce-1);
        setlprice(lprice-2);
    }
    }

//Bacon
    const addB = () =>{
        setbacon(bacon+1);
        setbprice(bprice+4);
    }
    const [bacon, setbacon] = useState(0);
        const [bprice, setbprice] = useState(0);
    const Bacon = () => {
            let barray = [];
            for (let b = 0; b < bacon; b++) {
                barray.push(<img src="tomato.jpg" />,<br />)
            }
            return (
                barray
            );
        }
        const Bremove = () => {
            for(let b=bacon; b>0; b--){
            setbacon(bacon-1);
            setbprice(bprice-4);
            }
        }



//cheese

const addC = () =>{
    setcheese(cheese+1);
    setcprice(cprice+3);
}
    const [cheese, setcheese] = useState(0)
    const [cprice, setcprice] = useState(0);
    const Cheese = () => {
        let carray = [];
        for(let c=0; c < cheese; c++){
            carray.push(<img src='cheese.jpg' />, <br />)
        }
        return(
            carray
        );
    }

    const Cremove = () => {
        for(let c=cheese; c>0; c--){
        setcheese(cheese-1);
    setcprice(cprice-3);
        }
    }


    const addM = () =>{
        setmeat(meat+1);
        setmprice(mprice+5);
    }

    const [meat, setmeat] = useState(0);
    const [mprice, setmprice] = useState(0);
    const Meat = () => {
        let marray = [];
        for (let m=0; m < meat; m++){
            marray.push(<img src="meat.jpg" />,<br />)
        }
       return(
        marray
       );
    }

    const Mremove = () => {
        for(let m=meat; m>0; m--){
        setmeat(meat-1);
        setmprice(mprice-5);
        }
    }


    return (
        <>
            <Header />
            {/* navbar end............. */}
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col'>
                        <div className='img1 text-center'>
                            <img src='top.jpg' />
                        </div>
                        <div className='add text-center'>
                            <h2>{Lettuce()} <br />

                                {Bacon()} <br />
                                {Cheese()} <br />
                                {Meat()}</h2>
                        </div>
                        <div className='img1 text-center'>
                            <img src='bottom.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            {/* content end........ */}
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col mt-5 p-5 text-center' style={{ backgroundColor: "chocolate" }}>
                        <div className='price'>
                            <h4>Current Price: {burger + lprice + bprice + cprice + mprice}$</h4>
                        </div>
                        <div className='lettuce'>
                            <label style={{ fontSize: "25px", fontWeight: "600" }}>Lettuce</label>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={Lremove}>Less</button>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={addL}>More</button>
                        </div>
                        <div className='lettuce'>
                            <label style={{ fontSize: "25px", fontWeight: "600" }}>Bacon</label>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={Bremove}>Less</button>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={addB}>More</button>
                        </div>
                        <div className='lettuce'>
                            <label style={{ fontSize: "25px", fontWeight: "600" }}>Cheese</label>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={Cremove}>Less</button>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={addC}>More</button>
                        </div>
                        <div className='lettuce'>
                            <label style={{ fontSize: "25px", fontWeight: "600" }}>Meat</label>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={Mremove}>Less</button>
                            <button className='btn btn-outline-warning' style={{ marginLeft: "15px", width: "100px" }} onClick={addM}>More</button>
                        </div>


                        <div className='signorder mt-3'>
                            <Link to="/form">
                                <button className='btn btn-outline-warning' style={{ width: "300px", height: "90px" }}>
                                    Sign Up To Order
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );
}




export default Burger;