import React from 'react';

export default function Work({ work, onChangeDone }) {
  const { id, day, month, year, description, done } = work;
  let color;

  if (!!done) {
    color = 'green';
  } else {
    color = 'red';
  }

  const handleChangeDone = () => {
    onChangeDone(id);
  };

  return (
    <button
      style={styles.btnBlock}
      className={`waves-effect waves-light btn ${color} dark-4`}
      onClick={handleChangeDone}
    >
      {day}/{month}/{year} {description}
    </button>
  );
}

const styles = {
  btnBlock: {
    width: '100%',
    alignItems: 'center',
  },
};
