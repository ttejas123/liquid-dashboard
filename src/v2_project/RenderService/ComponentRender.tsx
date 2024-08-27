import React from 'react';
import Registry from '../Components/index';
import withStateAndPropsLogger from '../HOC/WrapperComponent';
export interface ComponentInterface {
    id: string;
    type: string;
    subtype: string;
    style: {

    };
    api: {
        url: string;
        method_type: string;
    };
    debug: boolean;
}

interface ComponentRenderPropsInterface {
    component: ComponentInterface[]
}
function ComponentRender({ component }: ComponentRenderPropsInterface) {
    return (
        <>
         {
            component.map((v)=> {
                const C = withStateAndPropsLogger(Registry[v.type][v.subtype].Component);
                return (<C {...{...v, initstate: Registry[v.type][v.subtype].State}} key={v.id} />)
            })
         }   
        </>
    );
}

export default ComponentRender;