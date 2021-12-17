import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react'
import Spinner from './components/Spinner';
import Card from './components/Card';

function App() {

  const [loader, setloader] = useState(false)
  const [issues, setissues] = useState([])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form 
              loader={loader} 
              setLoader={setloader} 
              setIssues={setissues}
            />

          </div>
          <div className='col-12'>
            <Spinner loader={loader} />
          </div>
          <div className='col-12'>
            <div className='row'>
              {issues.map(issue => {
                
                  return <Card context={issue.context} message={issue.message} selector={issue.selector} code={issue.code} />
                
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
