export function DataTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption: string }) {
  return (
    <figure className="table-wrap">
      <figcaption>{caption}</figcaption>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
