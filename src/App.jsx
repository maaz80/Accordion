import { useState } from 'react';
import data from './components/Accodian/data';
import Navbar from './components/Navbar';

function App() {
  const [selected, setSelected] = useState(0);
  const [enablemultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findingIndex = copyMultiple.indexOf(getCurrentId);

    if (findingIndex === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findingIndex, 1);
    setMultiple(copyMultiple);
  }

  function handleEnableMultipleSelection() {
    setEnableMultiselection(!enablemultiselection);

    // Reset states when disabling multiple selection
    if (!enablemultiselection) {
      setSelected(0);
      setMultiple([]);
    }else{
      setMultiple([0])
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center overflow-hidden">
        <div className="flex flex-col justify-center rounded-md md:w-[30%] pt-3 w-[90%]">
          <button
            className="bg-gray-600 text-white border border-2 border-black"
            onClick={handleEnableMultipleSelection}
          >
            {enablemultiselection ? 'Disable multiple selection' : 'Enable multiple selection'}
          </button>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div key={dataItem.id} className="Item">
                <div
                  onClick={() => {
                    enablemultiselection
                      ? handleMultipleSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id);
                  }}
                >
                  <h3 className="flex justify-between bg-gray-400 rounded-md my-3 items-center pl-2">
                    {dataItem.question}{' '}
                    <span className="flex justify-end bg-red-600 rounded-md p-2 hover:font-bold hover:bg-red-800">
                      +
                    </span>
                  </h3>
                </div>
                {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="bg-gray-400 rounded-md text-center mb-3">
                    {dataItem.answer}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

export default App;
