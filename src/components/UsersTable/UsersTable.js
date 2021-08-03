import React from 'react';
import { Link } from 'react-router-dom';
const UsersTable = ({ data }) => {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>IP address</th>
        <th>Total clicks</th>
        <th>Total page views</th>
      </tr>

      {data.map(user => (
        <Link
          key={user.id}
          to={{
            pathname: `/users/${user.id}`,
          }}
        >
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.ip_address}</td>
          </tr>
        </Link>
      ))}
    </table>
  );
};

export default UsersTable;
