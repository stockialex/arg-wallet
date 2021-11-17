import Card from './components/Card'
import ListItems from './components/ListItems';
import 'bootstrap/dist/css/bootstrap.css'
import Input from './components/Input';

function App() {

  

  return (
    <div className="container-fluid">
      <div className='row justify-content-center'>
        <h1 className='text-center'>Conversor argento</h1>
      </div>
      
      <div className="row mt-4 justify-content-center">
        <Input />
      </div>

      <div className="row mt-3 justify-content-center">
        <div className="col-sm d-flex mx-auto justify-content-center">
          <ListItems />
        </div>
      </div>
    </div>
  );
}

export default App;
