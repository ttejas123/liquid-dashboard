import React from 'react';
import DataTableBase from './DataTableBase';

const CouponTable = ({ columns, data, name, setService, models }) => {
  return (
    <>
      <DataTableBase name={name} setService={setService} col={columns} rows={data} model_list={models} />
    </>
  );
};

export default CouponTable;
