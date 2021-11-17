import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

function Card (props) {

    const cryptoURL = `https://api.coingecko.com/api/v3/coins/${props.coin.toLowerCase()}`

    const [cryptoPrice, setCryptoPrice] = useState("")

    useEffect(()=>{
        axios.get(cryptoURL)
        .then((response)=>{
            setCryptoPrice(response.data.market_data.current_price.usd)
        })
    },[])

    const priceArs = (priceUsd) => {
        let price = priceUsd * props.dollar
        return price.toFixed(2)
    }

    return (
        <div className='card text-white bg-dark mb-3 Card'>
            <div className='card-header text-center'>
                <h2>{props.title}</h2>
            </div>
            <div className='card-body'>
                <h5 className='card-body my-purchase'>
                    {`${props.token}: $${cryptoPrice}`}
                </h5>
                <p className='actual-price'>
                    {`Dolar blue ARS$ ${props.dollar}`}
                </p>
                <h4 className='actual-price'>
                    {/* {props.actualPrice} */}
                </h4>
                <p className='actual-price currency-to-ars'>
                    {`1 ${props.token} = ARS $ ${priceArs(cryptoPrice)}`}
                </p>
                <p className='card-text'>
                    {/* {props.text} */}
                </p>
            </div>
        </div>
    )
}

export default Card;