import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './UserChart.scss';

const UserChart = ({ userData }) => {
  const { userStatistic, user } = userData;
  const fullName = user[0].first_name + ' ' + user[0].last_name;
  // console.log('user: ', user[0].first_name);
  const [inputUserData, setInputUserData] = useState(userStatistic);
  const allDates = inputUserData.map(item => item.date);
  const [date, setDate] = useState(allDates);
  const [clicks, setClicks] = useState([]);
  const [pageViews, setpageViews] = useState([]);

  const lastIndex = date.length;

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  let location = useLocation();

  const [minDate, setMinDate] = useState(new Date(date[0]));
  const [maxDate, setMaxDate] = useState(new Date(date[lastIndex - 1]));
  const [startDate, setStartDate] = useState(new Date(date[0]));

  const [endDate, setEndDate] = useState(addDays(startDate, 6));

  const [dateRange, setDateRange] = useState([startDate, endDate]);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [filteredDateRange, setFilteredDateRange] = useState(date);

  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      const filteredInputUserData = inputUserData.filter(item => {
        if (
          item.date >= startDate.toISOString().split('T')[0] &&
          item.date <= endDate.toISOString().split('T')[0]
        ) {
          return item;
        }
      });

      const filteredDates = filteredInputUserData.map(item => item.date);
      const filteredClicks = inputUserData.map(item => {
        if (!item.clicks) {
          return 0;
        } else {
          return item.clicks;
        }
      });

      const filteredPageViews = inputUserData.map(item => {
        if (!item.page_views) {
          return 0;
        } else {
          return item.page_views;
        }
      });

      setFilteredDateRange(filteredDates);
      setClicks(filteredClicks);
      setpageViews(filteredPageViews);
      console.log('filteredDates: ', filteredDates);
      console.log('filteredClicks: ', filteredClicks);
      console.log('filteredPageViews: ', filteredPageViews);
    }
  }, [endDate, startDate]);

  const dataClicks = {
    labels: filteredDateRange,
    datasets: [
      {
        label: 'Clicks',
        data: clicks,
        fill: false,
        backgroundColor: '#3A80BA',
        borderColor: '#3A80BA',
      },
    ],
  };
  const dataViews = {
    labels: filteredDateRange,
    datasets: [
      {
        label: 'Views',
        data: pageViews,
        fill: false,
        backgroundColor: '#3A80BA',
        borderColor: '#3A80BA',
        // tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // align: 'start',
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        min: 0,
        ticks: {
          // forces step size to be 50 units
          stepSize: 200,
        },
      },
    },
  };

  return (
    <>
      <>
        {/* <Link to="/">
          Main page <span>&#62; </span>
        </Link>
        <Link to="/users">
          Users statistics <span>&#62; </span>
        </Link> */}
        <Link className="link primary" to={location.pathname}>
          {fullName}
        </Link>
        <div className="name-date-wrapper">
          <h2 className="name">{fullName}</h2>
          <div className="my-datepicker-wrapper">
            <p className="datepicker-text">Select date range</p>

            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              selectsRange
              minDate={minDate}
              maxDate={maxDate}
              monthsShown={2}
            />
          </div>
        </div>
      </>
      <p className="chart-title">Clicks</p>
      <Line height="65" className="chart" data={dataClicks} options={options} />
      <p className="chart-title">Views</p>
      <Line height="65" className="chart" data={dataViews} options={options} />
    </>
  );
};

export default UserChart;
