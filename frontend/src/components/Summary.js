import React from 'react';

export default function Summary({ works }) {
  const completedWorks = works.filter((work) => {
    return work.done === true;
  });

  return (
    <div style={styles.flexRow}>
      <span>
        Total de tarefas: <span style={{ color: 'blue' }}>{works.length}</span>
      </span>
      <span>
        Tarefas cumpridas:{' '}
        <span style={{ color: 'green' }}>{completedWorks.length}</span>
      </span>
      <span>
        Tarefas não cumpridas:{' '}
        <span style={{ color: 'red' }}>
          {works.length - completedWorks.length}
        </span>
      </span>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};
