import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar.js';
import Footer from '../../Footer.js';

import { STATS_API } from '../../../constants/constants';

import { useTable, useSortBy } from 'react-table';

import '../tables.scss';
export default function ProjectsTable() {
  const [lastUpdatedTime, setLastUpdatedTime] = useState('');
  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(
    () => [
      {
        Header: 'Project',
        accessor: 'project',
      },
      {
        Header: 'Mentor',
        accessor: 'mentor',
      },
      {
        Header: 'Number of Contributors',
        accessor: 'contris',
      },
      {
        Header: 'Number of Commits',
        accessor: 'commits',
      },
      {
        Header: 'Lines(Added/Removed)',
        accessor: 'lines',
      },
    ],
    []
  );

  useEffect(() => {
    axios
      .get(`${STATS_API}/stats/projects`)
      .then((res) => {
        setRowData(res.data['stats']);
      })
      .catch((err) => {
        alert('Server Error,try again');
      });
    setLastUpdatedTime('TIME_FROM_BACKEND');
  }, []);

  function cellRenderer(params) {
    const mentor = params.data.mentor;
    const withHref = `<a href="/stats/mentor/${mentor}">${mentor}</a>`;
    return withHref;
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columnDefs, data: rowData }, useSortBy);

  return (
    <div>
      <Navbar />
      <div className='stats'>
        <div style={{ textAlign: 'center' }}>
          <h3>
            Last Update at {lastUpdatedTime}. Stats are updated for every 3
            hours{' '}
          </h3>
          <h5>
            You can sort the rows by clicking on headers, and also filter by
            clicking on the button by hovering
          </h5>
          <h5>Click on username to get detailed Stats</h5>

          <div className='table-container'>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
