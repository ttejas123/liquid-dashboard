import React from 'react';
import BaseSplitLayOut from '../Layout/BaseSplitLayOut';

function RegularListCompoent({
    ComponentRegistry,
    itemList,
    setService
}) {
  return (
    <BaseSplitLayOut>
        {
            itemList?.map((item, i) => {
          
                const Table = ComponentRegistry[item['type']][item['tableType']]
                return (
                  <div key={i} style={item['tableProperties']}>
                  <Table

                    key={i+item['id']}
                    setService={setService} 

                    {
                      ...item
                    }
                  />
                  </div>
                )})
        }
    </BaseSplitLayOut>
  )
}

export { RegularListCompoent };


{/*  */}