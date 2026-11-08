import './app.css';
import { useState } from 'react';
function App() {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  function HandleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <>
      <div className='expandler'>
        <h1>personal details</h1>
        <span onClick={HandleShowMore}>
          my name is anwar tarek
          {showMore ? (
            <span className='showMore'>
              iam graduated from faculty of engineering mansoura university,
              from department computer and control system department
            </span>
          ) : (
            '.....'
          )}
        </span>
        <hr />
        <span>
          i studied web development for five years backend and frontend, i
          learned many technologies like html5, css3 and many programming
          language like javascript and node js also typescript and databases
          like postgresql, mysql and also mongodb, sqlite and sobabase.
        </span>
      </div>
    </>
  );
}

export default App;
