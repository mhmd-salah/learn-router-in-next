import React from 'react';
import "./loading.css";

function loading () {
  const arr :Array<number> = [...Array(100)]
  return (
    <>
      <div className="mt-3 flex gap-2 flex-wrap mx-auto justify-center ">
        { arr.map((item) => (
          <div className="p-4 bg-slate-300 rounded-sm mb-3 w-96 h-[176px] box" key={item}>
            <h1 className="skeleton skeleton-text "></h1>
            <h2 className='skeleton skeleton-text skeleton-text__body'></h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default loading;