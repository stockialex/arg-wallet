import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="container-fluid">
      <div className='row justify-content-center'>
        <h1 className='text-center'>Dollar - Ars</h1>
      </div>
      
      <div className="row mt-4 justify-content-center">
        <input type="number" style={{width: '18rem'}} />
      </div>

      <div className="row mt-3 justify-content-center">
        <div className="col-sm d-flex mx-auto justify-content-center">
          <Card coin='Ethereum' text='ETH segunda crypto con market cap más grande.'/>
          <Card coin='Dolar' text='Dolar ahorrista, incluye el %65 de impuestos.'/>
          {/* <Card coin='Bitcoin' text='Criptomoneda más importante del momento.'/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
