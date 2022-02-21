import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention
    <>
    <div className="app">
     <div className='appBody'>
     <Sidebar />
     </div>
    </div>
    </>
  );
}

export default App;
