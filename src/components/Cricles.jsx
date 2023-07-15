import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const App = () => {
    const [blocks, setBlocks] = useState([{ id: uuid(), color: 'yellow', count: 0 }]);
    
   
    const handleColorChange = (id, color) => {
      setBlocks(prevBlocks =>
        prevBlocks.map(block =>
          block.id === id ? { ...block, color } : block
        )
      );
      setBlocks(prevBlocks =>
        prevBlocks.map(block =>
          block.id === id ? { ...block, count: block.count + 1 } : block
        )
      );
    };
const Block = ({ id,color, count, onColorChange }) => {
  const handleClick = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    onColorChange(id, randomColor);
  };
   
  const handleAddBlock = () => {
    if (blocks.length < 10) {
      setBlocks((prevBlocks) => [
        ...prevBlocks,
        { id: uuid(), color: 'yellow', count: 0 },
      ]);
    }
  

    
  };


  return (
    <div className='h-[20vh] mt-[10vh] flex flex-row gap-[20vw] justify-center items-center mx-auto'>
    <div >
    <div className="flex flex-col jsutify-center items-center flex-gap-[5vw] py-[0] px-[3vw]">
      <div className={`h-[10vh] w-[10vh] bg-${color} m-4 border-black border-2 rounded-[50%] items-center jsutify-center py-5 px-7`} style={{ backgroundColor: color }} >

      <p className="text-l mb-2 "> {count}</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 mx-10 rounded" onClick={handleClick}>
        Change Color
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded m-1" onClick={handleAddBlock} >
            New Circle
          </button>
          
    </div></div></div>
  );
};



 

  return (
    <div>
      <div className="flex flex-wrap">
        {blocks.map(block => (
          <Block
            key={block.id}
            id={block.id}
            color={block.color}
            count={block.count}
            onColorChange={handleColorChange}
          />
        ))}
      </div>
      {blocks.length < 10 && (
        <div className="flex justify-center w-full ">
         
        </div>
      )}
    </div>
  );
};

export default App;
