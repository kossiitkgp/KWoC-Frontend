import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function ProjectsTable() {

    const [lastUpdatedTime, setLastUpdatedTime] = useState('')
    const [rowData, setRowData] = useState([])

    const columnDefs =  [{
        headerName: "Project", field: "project", sortable:true, filter: true,cellStyle: { textAlign: 'left'},
      }, {
        headerName: "Mentor", field: "mentor", sortable:true, filter: true,cellRenderer:cellRenderer,cellStyle: { textAlign: 'left'},
      }, {
        headerName: "Number of Contributors", field: "contris", sortable:true, filter: true,
      },{
        headerName: "Number of Commits", field: "commits", sortable:true, filter: true,
      },{
        headerName: "Lines(Added/Removed)", field: "lines", sortable:true, filter: true,
      }
    ]

    useEffect(() => {
        setRowData([
         { "project": 'aaa', 'mentor': 'aaa', 'contris': 111, 'commits': 11, lines: '+111/-12' },
         { "project": 'bbaaa', 'mentor': 'baaa', 'contris': 3111, 'commits': 114, lines: '+22111/-12' }
        ])
        setLastUpdatedTime('TIME_FROM_BACKEND')
        
    }, [])

    function cellRenderer(params) {
        const mentor = params.data.mentor
        const withHref =  `<a href="/stats/mentor/${mentor}">${mentor}</a>`
        return withHref
    }

    
    return(
       <div style={{textAlign: 'center'}}>
        <h3>Last Update at {lastUpdatedTime}. Stats are updated for every 3 hours </h3>
        <h5>You can sort the rows by clicking on headers, and also filter by clicking on the button by hovering</h5>
        <h5>Click on username to get detailed Stats</h5>
        
            <div
                className="ag-theme-alpine"
                style={{
                height: '90vh',
                width: '58vw',
                position: 'absolute',
                left: '50%',
                right: '50%',
                transform: 'translateX(-50%)' }}
                >   
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}>
                    </AgGridReact>
            </div>
       </div>
    )
}