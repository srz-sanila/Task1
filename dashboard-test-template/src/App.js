import './App.css';
import ContentArea from './components/ContentArea';
import Header from './components/Header';

function App() {
  return (
    <div className='dashboard-container'>
      <div className='headerComp'>
      <Header />
      </div>      
      
      <div className='ContentComp'> <ContentArea />   </div>
        
    </div>
  );
}

export default App;
