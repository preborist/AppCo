import React from 'react';
import './TableItem.scss';

const TableItem = ({ userData, statData }) => {
  const { id, first_name, last_name, email, gender, ip_address } = userData;
  const currentUserStatArray = statData.filter(data => id == data.user_id);

  const clicksSumm = currentUserStatArray.reduce(
    (acc, value) => acc + Number(value.clicks),
    0,
  );
  const pageViewsSumm = currentUserStatArray.reduce(
    (acc, value) => acc + Number(value.page_views),
    0,
  );
  return (
    <>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{ip_address}</td>
      <td>{clicksSumm}</td>
      <td>{pageViewsSumm}</td>
    </>
  );
};

export default TableItem;
