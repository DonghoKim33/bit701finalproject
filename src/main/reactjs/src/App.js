import logo from './logo.svg';
import './App.css';
import img1 from './img1.jpeg';
function App() {
  return (
    <div className="App">
      <img className={'App-logo'} src={img1} width={300} border={"1"}/>
      <br/><br/>
      <h2>Docker 배포 성공 기원 !!!</h2>
    </div>
  );
}

export default App;
