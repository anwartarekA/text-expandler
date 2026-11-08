import './app.css';
import { useState } from 'react';
function App() {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  function HandleShowMore() {
    setShowMore(!showMore);
  }
  function handleShowLess2() {
    setShowMore((prev) => (showMore === true ? false : true));
  }
  function handleShowLess() {
    setShowLess(!showLess);
  }
  function HandleShowMore2() {
    setShowLess((prev) => (prev === false ? true : false));
  }
  return (
    <>
      <div className='expandler'>
        <h1>personal details</h1>
        <span>
          {showMore ? (
            <span>
              my name is anwar tarek iam graduated from faculty of engineering
              mansoura university, from department computer and control system
              department{' '}
              <span className='showLess' onClick={handleShowLess2}>
                show less...
              </span>
            </span>
          ) : (
            <span>
              my name is anwar tarek{' '}
              <span className='showMore' onClick={HandleShowMore}>
                show more...
              </span>
            </span>
          )}
        </span>
        <hr />
        <span>
          {showLess ? (
            <span>
              i studied web development{' '}
              <span className='showMore' onClick={HandleShowMore2}>
                show more...
              </span>
            </span>
          ) : (
            <span>
              {' '}
              i studied web development for five years backend and frontend, i
              learned many technologies like html5, css3 and many programming
              language like javascript and node js also typescript and databases
              like postgresql, mysql and also mongodb, sqlite and sobabase.
              <span className='showLess' onClick={handleShowLess}>
                show less...
              </span>
            </span>
          )}
        </span>
      </div>
    </>
  );
}

export default App;
