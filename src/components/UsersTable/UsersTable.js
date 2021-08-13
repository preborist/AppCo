import React from 'react';
import { useState } from 'react';

import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import TableItem from '../TableItem';
import ReactPaginate from 'react-paginate';
import './UsersTable.scss';

const UsersTable = ({ data }) => {
  const { usersData, statistics } = data;
  const [currentPage, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  let history = useHistory();

  const handleRoute = userId => {
    history.push(`/users/${userId}`);
  };

  const width = window.innerWidth;
  const breakpoint = 768;
  let pageCount = 20;
  let pageSize = 0;

  if (width < breakpoint) {
    pageSize = 10;
    pageCount = 50;
  } else pageSize = 50;
  const displayData = _.chunk(usersData, pageSize)[currentPage];

  return (
    <>
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
        </table>{' '}
      </div>
      <ReactPaginate
        containerClassName="pagination list"
        pageClassName="page-item"
        previousLabel={''}
        nextLabel={''}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName="page-link-active"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default UsersTable;
