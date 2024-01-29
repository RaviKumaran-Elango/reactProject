import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './redux/counter';
import MoneyCal from './mini/paymenttask';
import useStore from './mini/modal';
import AlertDialog from './mini/modal';
import Softcor from './apipracise/22';
import FirstApi from './apitask/firstapi';
import Sampletext from './apipracise/22';
import SecoundApi from './apitask/second';
import Thirdapi from './apitask/thirdapi';
import Fourthapi from './apitask/fourth';
import Fifthapi from './apitask/five';
import Sixthapi from './apitask/sixth';
import Sevenapi from './apitask/seven';


const App = () => {
  

  return (
      <div>
        <Sevenapi/>
      </div>
      


       // <Provider store={store}>
       // <div>
       //   <h1>Redux Counter App</h1>
       //   <Counter/>
       //   </div>
       //   </Provider>
    
  );
};

export default App;
