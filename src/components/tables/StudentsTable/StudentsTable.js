import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar.js';
import Footer from '../../Footer.js';

import { STATS_API } from '../../../constants/constants';

import { useTable, useSortBy } from 'react-table';

import '../tables.scss';

export default function StudentsTable() {
  const [lastUpdatedTime, setLastUpdatedTime] = useState('');
  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(
    () => [
      {
        Header: 'Name of Student',
        accessor: 'name',
      },
      {
        Header: 'Github Username',
        accessor: 'username',
        Cell: (e) => <a href={`/stats/student/${e.value}`}> {e.value} </a>,
      },
      {
        Header: 'PRs(Open/Merged)',
        accessor: 'prs',
      },
      {
        Header: 'Commits',
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
      .get(`${STATS_API}/stats/students`)
      .then((res) => {
        setRowData(res.data['stats'].sort((a,b) => (parseInt(a.commits) < parseInt(b.commits)) ? 1 : -1));
      })
      .catch((err) => {
        alert('Server Error, Try again');
      });
      let currentTime = new Date()
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330;
    let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    let hoursIST = ISTTime.getHours()
    if(hoursIST.toString().length == 1)
      hoursIST = '0'+ hoursIST.toString()
    setLastUpdatedTime(`${hoursIST.toString()}:00 IST`);

  }, []);

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
        <h3>
          Last Update at {lastUpdatedTime}. Stats are updated for every 1 hour{' '}
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
                      {...column.getHeaderProps(column.getSortByToggleProps())}
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
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
