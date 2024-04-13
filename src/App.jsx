import { useState } from 'react';
import data from './components/Accodian/data';
import Navbar from './components/Navbar';

function App() {
  const [selected, setSelected] = useState(0);
  const [enablemultiselection, setenablemultiselection] = useState(false);
  const [mulitple, setmultiple] = useState([]);

  function handlesingleselection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handlemultipleselection(getCurrentId) {
    let cpymultiple = [...mulitple];
    const findingindex = cpymultiple.indexOf(getCurrentId);
    console.log(findingindex);
    if (findingindex === -1) cpymultiple.push(getCurrentId);
    else cpymultiple.splice(findingindex, 1);
    setmultiple(cpymultiple);
  }
  console.log(selected, mulitple);

  return (
    <>
      <Navbar />
      <div className=" flex justify-center items-center overflow-hidden">
        <div className=" flex flex-col justify-center  p-10 rounded-md md:w-[30%] w-[90%]">
          <button
            className="bg-gray-600 text-white border border-2 border-black"
            onClick={() => setenablemultiselection(!enablemultiselection)}
          >
            Enable multiple selection
          </button>
          {data && data.length > 0
            ? data.map((dataItem) => (
              <div key={dataItem.id} className="Item">
                <div
                  onClick={() => {
                    enablemultiselection
                      ? handlemultipleselection(dataItem.id)
                      : handlesingleselection(dataItem.id);
                  }}
                >
                  <h3 className="flex justify-between bg-gray-400 rounded-md my-3 items-center pl-2">
                    {dataItem.question}{' '}
                    <span className="flex justify-end bg-red-600 rounded-md p-2 hover:font-bold hover:bg-red-800">
                      +
                    </span>
                  </h3>
                </div>
                {selected === dataItem.id ||
                  mulitple.indexOf(dataItem.id) !== -1 ? (
                  <div className="bg-gray-400 rounded-md text-center mb-3">
                    {dataItem.answer}
                  </div>
                ) : null}
              </div>
            ))
            : ''}
        </div>
      </div>
    </>
  );
}

export default App;
