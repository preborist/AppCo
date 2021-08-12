import React from 'react';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import _ from 'lodash';
// import Pagination from 'react-bootstrap/Pagination';
import TableItem from '../TableItem';
import ReactPaginate from 'react-paginate';
import './UsersTable.scss';
import next from './next.svg';

const UsersTable = ({ data }) => {
  console.log('data: ', data);
  const { usersData, statistics } = data;
  console.log('statistics: ', statistics);
  const [currentPage, setPage] = useState(0);
  // const [currentPage, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  let history = useHistory();

  const handleRoute = userId => {
    history.push(`/users/${userId}`);
    // console.log('userId: ', userId);
  };

  const width = window.innerWidth;
  // The width below which the mobile view should be rendered
  const breakpoint = 768;

  let pageSize = 0;
  if (width < breakpoint) {
    pageSize = 16;
  } else pageSize = 50;
  const displayData = _.chunk(usersData, pageSize)[currentPage];
  // console.log('displayData', displayData);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-head">
            <th className="table-head-titles">Id</th>
            <th className="table-head-titles">First name</th>
            <th className="table-head-titles">Last name</th>
            <th className="table-head-titles">Email</th>
            <th className="table-head-titles">Gender</th>
            <th className="table-head-titles">IP address</th>
            <th className="table-head-titles">Total clicks</th>
            <th className="table-head-titles">Total page views</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map(user => (
            <tr
              className="table__line"
              onClick={() => handleRoute(user.id)}
              key={user.id}
            >
              <TableItem userData={user} statData={statistics} />
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        containerClassName="pagination list"
        pageClassName="page-item"
        previousLabel={''}
        nextLabel={''}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName="page-link-active"
        pageLinkClassName="page-link"
      />
    </div>
  );
};

export default UsersTable;
