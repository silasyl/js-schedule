import React from 'react';

export default function Button({
  isYear,
  value,
  selected,
  onChangeYear,
  onChangeMonth,
}) {
  const monthNames = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

  let showContent;

  const handleChange = () => {
    if (isYear === 'true') {
      onChangeYear(value);
    } else {
      onChangeMonth(value);
    }
  };

  if (isYear === 'true') {
    showContent = () => {
      if (value === selected) {
        return (
          <button className="waves-effect waves-light btn" disabled>
            {value}
          </button>
        );
      }
      return (
        <button
          className="waves-effect waves-light btn blue"
          onClick={handleChange}
        >
          {value}
        </button>
      );
    };
  } else {
    showContent = () => {
      if (value === selected) {
        return (
          <button className="waves-effect waves-light btn disabled">
            {monthNames[value - 1]}
          </button>
        );
      }
      return (
        <button
          className="waves-effect waves-light btn red dark-4"
          onClick={handleChange}
        >
          {monthNames[value - 1]}
        </button>
      );
    };
  }

  return showContent();
}
