import React from 'react'
import { RegularListCompoent } from './RegularListCompoent'

function ServiceListCompoent(props) {
  return (
    <div>
        {
            props.service.map((val, index)=> {
                return (
                    <div style={{ marginTop: "5rem" }} key={index}>
                            <RegularListCompoent key={index} { ...{itemList: val }} {...props} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ServiceListCompoent