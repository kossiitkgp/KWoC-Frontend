import axios from "axios";
import Fuse from "fuse.js";
import React, { useEffect, useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import { STATS_API } from "../constants";
import { shuffleArray } from "../utils/shuffle";

const debouncer = function (fn, delay) {
  let timer;
  return function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const searchOptions = {
  keys: ["name", "username"],
  // the threshold value should be decreased to be more strict in getting search results
  threshold: 0.5,
};

export default function StudentsTable() {
  const [lastUpdatedTime, setLastUpdatedTime] = useState("");
  const [rowData, setRowData] = useState([]);
  const [allStats, setAllStats] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPageNum, setLastPageNum] = useState(0);

  const columnDefs = useMemo(
    () => [
      {
        Header: "Name of Student",
        accessor: "name",
      },
      {
        Header: "Github Username",
        accessor: "username",
        Cell: (e) => <a href={`/stats/student/${e.value}`}> {e.value} </a>,
      },
      {
        Header: "PRs(Open/Merged)",
        accessor: "prs",
      },
      {
        Header: "Commits",
        accessor: "commits",
      },
      {
        Header: "Lines(Added/Removed)",
        accessor: "lines",
      },
    ],
    []
  );

  function goToPrevPage() {
    const startIndex = (page - 1) * 100;
    const endIndex = startIndex + 100;
    setRowData(allStats.slice(startIndex, endIndex));
    setPage(page - 1);

    // set next pageData
  }
  function goToNextPage() {
    // set prev pageData
    const startIndex = (page + 1) * 100;
    const endIndex = startIndex + 100;
    setRowData(allStats.slice(startIndex, endIndex));
    setPage(page + 1);
  }

  function handleSearch(e) {
    if (e === "") {
      setRowData(allStats.slice(page * 100, page * 100 + 100));
    } else {
      const fuse = new Fuse(allStats, searchOptions);
      const results = fuse.search(e).map((i) => i.item);
      setRowData(results);
    }
  }

  useEffect(() => {
    axios
      .get(`${STATS_API}/stats/students`)
      .then((res) => {
        setRowData(
          res.data["stats"]
            .sort((a, b) =>
              parseInt(a.commits) < parseInt(b.commits) ? 1 : -1
            )
            .slice(0, 100)
        );
        setAllStats(
          res.data["stats"].sort((a, b) =>
            parseInt(a.commits) < parseInt(b.commits) ? 1 : -1
          )
        );
        const MAX_NUMBER_OF_PAGES = Math.ceil(res.data["stats"].length / 100);
        setLastPageNum(MAX_NUMBER_OF_PAGES);
      })
      .catch((err) => {
        alert("Server Error, Try again");
      });
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330;
    let ISTTime = new Date(
      currentTime.getTime() + (ISTOffset + currentOffset) * 60000
    );
    let hoursIST = ISTTime.getHours();
    if (hoursIST.toString().length === 1) hoursIST = "0" + hoursIST.toString();
    setLastUpdatedTime(`${hoursIST.toString()}:00 IST`);
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnDefs, data: rowData }, useSortBy);

  return (
    <div>
      <div className="stats">
        <h3>
          Coding period has ended
          <br />
          <u>Note for Students</u>: Please submit your report link for end evals
          in the Student Dashboard before 9th Jan 11 PM IST.
          <br /> Last Updated at 4th Jan 11:59 PM IST{" "}
        </h3>
        <h5>
          You can sort the rows by clicking on headers, and also filter by
          clicking on the button by hovering
        </h5>
        <h5>Click on username to get detailed Stats</h5>

        <div class="field">
          <div class="control">
            <input
              class="input is-primary is-medium"
              type="text"
              placeholder="Search the whole table by Username or Name"
              onChange={(e) => {
                debouncer(handleSearch, 300)(e.target.value);
              }}
              style={{
                width: "30%",
                position: "relative",
                left: "50%",
                right: "50%",
                transform: "translateX(-50%)",
              }}
            ></input>
          </div>
        </div>

        {page > 0 ? (
          <button
            onClick={goToPrevPage}
            style={{ color: "white", fontSize: "120%" }}
          >
            Prev
          </button>
        ) : (
          ""
        )}
        <span
          style={{
            color: "white",
            marginLeft: "1%",
            marginRight: "1%",
            fontSize: "120%",
          }}
        >
          Page: {page + 1}
        </span>
        {page + 2 <= lastPageNum ? (
          <button
            onClick={goToNextPage}
            style={{ color: "white", fontSize: "120%" }}
          >
            Next
          </button>
        ) : (
          ""
        )}

        <div className="table-container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
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
              {shuffleArray(rows, 1).map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {page > 0 ? (
          <button
            onClick={goToPrevPage}
            style={{ color: "white", fontSize: "120%" }}
          >
            Prev
          </button>
        ) : (
          ""
        )}
        <span
          style={{
            color: "white",
            marginLeft: "1%",
            marginRight: "1%",
            fontSize: "120%",
          }}
        >
          Page: {page + 1}
        </span>
        {page + 2 <= lastPageNum ? (
          <button
            onClick={goToNextPage}
            style={{ color: "white", fontSize: "120%" }}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
