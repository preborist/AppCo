import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './UserChart';

const UserChart = ({ userData }) => {
  const [inputUserData, setInputUserData] = useState(userData);
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

    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: [
        {
          beginAtZero: true,
        },
        { suggestedMin: 0 },
      ],
    },
  };

  return (
    <>
      <>
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
      </>
      <Line height="65" className="chart" data={dataClicks} options={options} />
      <Line height="65" className="chart" data={dataViews} options={options} />
    </>
  );
};

export default UserChart;
