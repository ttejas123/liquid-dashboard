import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import React from 'react';
import "./apis/index";
import Registry from './Components/index';
import withStateAndPropsLogger from './HOC/WrapperComponent';
        
function V2_app() {
    const d: {
        layout: {
            type: string;
            columns: number;
            rows: number;
            gap: string;
        };
        Component: ({
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
        })[];
    } = {
        "layout": {
                "type": "grid",
                "columns": 3,
                "rows": 2,
                "gap": "10px"
        },
        "Component": [{
            id: "1",
            type: "Table",
            subtype: "BasicTable",
            style: {
                "row": 1,
                "column": 1,
                "columnSpan": 3
            },
            api: {
                url: "/v2/shoppers/read",
                method_type: "get"
            },
            debug: true,
        },
        {
            id: "2",
            type: "Table",
            subtype: "BasicTable",
            style: {
                "row": 2,
                "column": 1
            },
            api: {
                url: "/v2/logs/read",
                method_type: "get"
            },
            debug: false,
        }]
    }
    return (
        <div>
            {
                d.Component.map((v)=> {
                    const C = withStateAndPropsLogger(Registry[v.type][v.subtype].Component);
                    return (<C {...{...v, initstate: Registry[v.type][v.subtype].State}} key={v.id} />)
                })
            }
        </div>
    );
}

export default V2_app;