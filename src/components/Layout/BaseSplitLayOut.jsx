import React from 'react'

function BaseSplitLayOut({ children }) {
    const arrOf_children = children
    const len = arrOf_children.length
    return (
    <div style={{width: "56.5rem"}}>
        <div style={{ width: "100%" }}>
            {
                len > 0 && (<>{arrOf_children[0]}</>)
            }
        </div>

        <div style={{ display: "flex", flexWrap: "wrap"}}>
            {
                len > 1 && (<>
                {
                    arrOf_children.map((val, i)=> {
                        if(i > 0) {
                            return (
                                <>{val}</>
                            )
                        } else {
                            return ("")
                        }
                    })
                }</>)
            }
        </div>

    </div>
  )
}

export default BaseSplitLayOut