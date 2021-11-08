import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Card.css';

function Card (props) {
    
    const isCrypto = props.coin === 'Dolar' ? false : true

    const baseURL = isCrypto ? 
        `https://api.coingecko.com/api/v3/coins/${props.coin.toLowerCase()}`: 
        'https://criptoya.com/api/dolar'

    const [post, setPost] = useState("")

    useEffect(()=>{
        axios.get(baseURL)
        .then((response)=>{
            isCrypto ? setPost(response.data.market_data.current_price.usd)
            : setPost(response.data.blue)
        })
    },[])

    return (
        <div className='card text-white bg-dark mb-3 Card'>
            <div className='card-header text-center'>
                <h2>{props.coin}</h2>
            </div>
            <div className='card-body'>
                <h5 className='card-body'>
                    {isCrypto ? 'USD$ ' : 'ARS$ '}
                    {post}
                </h5>
                <p className='card-text'>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Card;