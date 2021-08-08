import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import TableItem from '../TableItem';
import ReactPaginate from 'react-paginate';

const UsersTable = ({ data }) => {
  console.log('data: ', data);
  const { usersData, statistics } = data;
  console.log('statistics: ', statistics);
  const [currentPage, setPage] = useState(0);
  // const [currentPage, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const pageSize = 50;
  const displayData = _.chunk(usersData, pageSize)[currentPage];
  console.log('displayData', displayData);

  return (
    <div>
      <table>
        <thead>
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
        </thead>
        <tbody>
          {displayData.map(user => (
            <tr key={user.id}>
              <Link
                to={{
                  pathname: `/users/${user.id}`,
                }}
              >
                <TableItem userData={user} statData={statistics} />
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default UsersTable;
