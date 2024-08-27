import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Rating } from 'primereact/rating';
import { Skeleton } from 'primereact/skeleton';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
import axios from '../../apis/Interceptor/interceptor';

interface BasicTableStateInterface {
    columns: {type:string, assessor:string}[],
    data: any[]
}

export const BasicTableState: BasicTableStateInterface = {
    columns: [],
    data: []
}

interface propsInterface {
    id: string;
    type: string;
    subtype: string;
    style: {};
    initstate: BasicTableStateInterface;
    api: {
        url: string;
        method_type: string;
    };
    debug: boolean;
    state: BasicTableStateInterface,
    setState: any
}

const GetColumn = ({ type, assessor })=> {
    const imageBodyTemplate = (product) => {
        return <img src={`${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };
    
    const formatCurrency = (value, currency= null) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: currency ? currency : 'USD' });
    };
    
    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return 'danger';
        }
    };

    if(type == "IMG") return (<Column field={assessor} header="Image" body={imageBodyTemplate}></Column>);
    if(type == "IMG") return (<Column field={assessor} header="Price" body={priceBodyTemplate}></Column>)
    if(type == "PILL") return (<Column field={assessor} header="Reviews" body={ratingBodyTemplate}></Column>)
    
    return (<Column field={assessor} header="Category"></Column>);
}

export default function BasicTable({ state, setState, ...props }: propsInterface) {
    const [error, setError] = useState<string | null>(null);

    const [lazyLoading, setLazyLoading] = useState(true);
    let loadLazyTimeout;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        loadLazyTimeout = setTimeout(() => {
            ;(async()=> {
                try {
                    const d = await axios[props.api.method_type](props.api.url);
                    setState({data:  d.data.data, columns: d.data.columns})
                    setLazyLoading(false);
                } catch (err:any) {
                    setError((err as Error).message);
                    setLazyLoading(false);
                }
            })()
        }, 1000*3);
    };

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };
    
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    
    if (error) {
        return (
        <div>
            <h2>Error Loading Component</h2>
            <p>{error}</p>
        </div>
        );
    }
    
    return (
        <div className="card shadow-lg" style={{width:  "60rem", boxShadow: "1px 3px 10px #f0f0f0", borderRadius: "10px"}}>
            <DataTable
                value={state.data} scrollable scrollHeight="400px"
                paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorClassName='rounded-full'
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}
                virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                tableStyle={{ minWidth: '60rem' }}>
                 {!lazyLoading && state.columns && state.columns.length ?
                    state.columns.map((c:{ assessor: any; type: any }, index)=> {
                        return (GetColumn({assessor: c.assessor, type:c.type}))
                    })
                     : <></>
                 }
            </DataTable>
        </div>
    );
}
