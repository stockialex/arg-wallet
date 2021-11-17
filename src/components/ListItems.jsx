import axios from 'axios';
import {useState, useEffect} from 'react';
import Card from './Card.jsx';
import cryptos from '../cryptos.js';

const ListItems = () => {

    const dollarURL = 'https://criptoya.com/api/dolar'
    const [dollar, setDollar] = useState(0)

    useEffect(() => {
        axios.get(dollarURL)
        .then(response => {
            setDollar(response.data.blue)
        })
    })

    return (
        cryptos.map(crypto => ( 
            <Card 
                title={crypto.name} 
                dollar={dollar} 
                coin={crypto.nameApi} 
                token={crypto.token}
            />
        ))
    );
}
 
export default ListItems;