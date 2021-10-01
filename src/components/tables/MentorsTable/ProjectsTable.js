import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import { STATS_API } from "../../../constants/constants";
import Footer from "../../Footer.js";
import Navbar from "../../Navbar.js";
import "../tables.scss";

export default function ProjectsTable() {
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "title",
        // Cell: (e) => <a href={e.value}>{e.value}</a>
      },

      {
        Header: "Number of Contributors",
        accessor: "contri",
      },
      {
        Header: "Number of Commits",
        accessor: "commits",
      },
      {
        Header: "Lines(Added/Removed)",
        accessor: "lines",
      },
    ],
    []
  );

  useEffect(() => {
    axios
      .get(`${STATS_API}/stats/projects`)
      .then((res) => {
        setRowData(
          res.data["stats"].sort((a, b) =>
            parseInt(a.commits) < parseInt(b.commits) ? 1 : -1
          )
        );
        console.log(res.data["stats"]);
      })
      .catch((err) => {
        alert("Server Error,try again");
      });
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330;
    let ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );
    let hoursIST = ISTTime.getHours();
    if (hoursIST.toString().length == 1) hoursIST = "0" + hoursIST.toString();
    setLastUpdatedTime(`${hoursIST.toString()}:00 IST`);
  }, []);

  function cellRenderer(params) {
    const mentor = params.data.mentor;
    const withHref = `<a href="/stats/mentor/${mentor}">${mentor}</a>`;
    return withHref;
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnDefs, data: rowData }, useSortBy);

  return (
    <div>
      <Navbar />
      <div className="stats">
        <div style={{ textAlign: "center" }}>
          <h3>
            Coding period has ended
            <br />
            <u>Note for Students</u>: Please submit your report link for end
            evals in the Student Dashboard before 9th Jan 11 PM IST.
            <br /> Last Updated at 4th Jan 11:59 PM IST{" "}
          </h3>
          <h5>
            You can sort the rows by clicking on headers, and also filter by
            clicking on the button by hovering
          </h5>

          <div className="table-container">
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
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
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
                            {cell.render("Cell")}
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
