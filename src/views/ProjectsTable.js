import React, { useMemo, useState } from "react";
import { useSortBy, useTable } from "react-table";
import ProjectStats2022 from "../data/project-stats-2022.json";

export default function ProjectsTable() {
  const [rowData, setRowData] = useState(
    ProjectStats2022.Stats.sort((a, b) => b.pr_count - a.pr_count)
  );

  const columnDefs = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "name",
        // Cell: (e) => <a href={e.value}>{e.value}</a>
      },

      {
        Header: "Number of PRs",
        accessor: "pr_count",
      },
      {
        Header: "Number of Commits",
        accessor: "commit_count",
      },
      {
        Header: "Lines Added",
        accessor: "lines_added",
      },
      {
        Header: "Lines Removed",
        accessor: "lines_removed",
      },
    ],
    []
  );

  function cellRenderer(params) {
    const mentor = params.data.mentor;
    const withHref = `<a href="/stats/mentor/${mentor}">${mentor}</a>`;
    return withHref;
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnDefs, data: rowData }, useSortBy);

  // TODO: better design for tables, refer https://github.com/sahil-shubham/puny-sql-editor/blob/main/src/shared/DataTable.tsx
  return (
    <div className="stats">
      <h1 className="title">Project Stats</h1>
      <p>You can sort the rows by clicking on headers.</p>

      <div>
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
              {rows.map((row) => {
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
      </div>
    </div>
  );
}

// export default function ProjectsTable() {
//   return (
//     <div className="tables">
//       <div className="tables-hero">
//         <h1 className="heading">
//           Stats will be displayed once coding period starts
//         </h1>
//       </div>
//     </div>
//   );
// }
