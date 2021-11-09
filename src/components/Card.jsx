import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

function Card (props) {

    const cryptoURL = `https://api.coingecko.com/api/v3/coins/${props.coin.toLowerCase()}`
    const dollarURL = 'https://criptoya.com/api/dolar'

    const [crypto, setCrypto] = useState("")
    const [dollar, setDollar] = useState("")


    useEffect(()=>{
        axios.get(cryptoURL)
        .then((response)=>{
            setCrypto(response.data.market_data.current_price.usd)
        })
        .then(axios.get(dollarURL)
            .then((response)=>{
                setDollar(response.data.blue)
            }))
    },[])

    return (
        <div className='card text-white bg-dark mb-3 Card'>
            <div className='card-header text-center'>
                <h2>this is a test</h2>
            </div>
            <div className='card-body'>
                <h5 className='card-body my-purchase'>
                    {`El eth ${crypto}`}
                </h5>
                <h4 className='actual-price'>
                    {`El dolar blue ${dollar}`}
                </h4>
                <h4 className='actual-price'>
                    {/* {props.actualPrice} */}
                </h4>
                <h3 className='actual-price currency-to-ars'>
                    {/* {props.actualPrice} */}
                </h3>
                <p className='card-text'>
                    {/* {props.text} */}
                </p>
            </div>
        </div>
    )
}

export default Card;