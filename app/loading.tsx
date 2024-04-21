import React from 'react';

function loading () {
  return (
    <div className="mt-3 flex gap-2 flex-wrap mx-auto justify-center">
      <div className="p-4 bg-slate-300 rounded-sm mb-3 w-96">
        <h1 className="text-red-400">loading . . .</h1>
        <h2>loading . . .</h2>
      </div>
    </div>
  );
}

export default loading;