import React from 'react';
import DataTableBase from './DataTableBase';

const PersonaTable = ({ name, api, setService, columns=[], data=[], model=[] }) => {
  return (
    <>
      <DataTableBase api={api} name={name} setService={setService} col={columns} rows={data} model_list={model} />
    </>
  );
};

export default PersonaTable;
