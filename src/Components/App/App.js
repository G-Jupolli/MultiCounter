import { useStateValue } from '../../StateProvider/StateProvider';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import {Helmet} from "react-helmet";
import './App.css';

function App() {
  const [{ counters }] = useStateValue();

  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Khal's Multicounter</title>
        <link rel="canonical"/>
      </Helmet>
      <Header />
      <div className='app__counterContainer' >
        {
          counters.map((counter) => (
            <Counter 
              id={counter.id}
              title={counter.title}
              count={counter.count}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
