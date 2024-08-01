import {useState} from 'react'
import './App.css'
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"
import {ColDef} from "ag-grid-community";

function App() {
    const [count, setCount] = useState(0)

    interface IRow {
        make: string;
        model: string;
        price: number;
        electric: boolean;
    }

    // Create new GridExample component
    const [rowData] = useState<IRow[]>([
        {make: 'Tesla', model: 'Model Y', price: 64950, electric: true},
        {make: 'Ford', model: 'F-Series', price: 33850, electric: false},
        {make: 'Toyota', model: 'Corolla', price: 29600, electric: false},
        {make: 'Mercedes', model: 'EQA', price: 48890, electric: true},
        {make: 'Fiat', model: '500', price: 15774, electric: false},
        {make: 'Nissan', model: 'Juke', price: 20675, electric: false},
    ]);


    const [colDefs] = useState<ColDef<IRow>[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        { field: 'electric' },
    ]);


    return (
        <>
            <h1>This is sub app</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <div
                className="ag-theme-quartz" // applying the Data Grid theme
                style={{height: 500}} // the Data Grid will fill the size of the parent container
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    suppressDragLeaveHidesColumns={true}
                />
            </div>

        </>
    )
}

export default App
