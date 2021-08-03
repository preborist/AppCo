import React from 'react';
const UserChart = ({ data }) => {
  return (
    <div>
      {data.map(stat => (
        <ul key={stat.id}>
          <td>{stat.user_id}</td>
          <td>{stat.date}</td>
          <td>{stat.clicks}</td>
        </ul>
      ))}
    </div>
  );
};

export default UserChart;
