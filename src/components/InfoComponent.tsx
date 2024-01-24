import React from 'react'

interface infoComponentInterface {
  title:string,
  info:string
}

export const InfoComponent = ({info,title}: infoComponentInterface) => {
  return (
    <div>
      <p className="text-[#969696] font-bold text-center mb-1 text-xs tracking-[1.458px] ">
        {title}
      </p>
      <p className="text-xl font-medium text-center">{info} </p>
    </div>
  );
};
