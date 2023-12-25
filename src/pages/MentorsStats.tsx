function MentorsStats() {
  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className="font-display text-6xl font-bold text-center mb-8 py-4">
        Mentors Stats
      </h1>
      <table className='border'>
        <tr className='border'>
          <th>Mentor</th>
          <th>Total PRs</th>
          <th>Total Commits</th>
          <th>Total Lines Changed</th>
          <th>Total Projects</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>5</td>
          <td>10</td>
          <td>100</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>10</td>
          <td>20</td>
          <td>200</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}
export default MentorsStats;
