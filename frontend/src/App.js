import React, { useEffect, useState } from 'react';

import * as api from './api/apiService';
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
import Summary from './components/Summary';
import Work from './components/Work';
import Works from './components/Works';

export default function App() {
  const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const YEARS = [2019, 2020, 2021];

  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);
  const [selectedAll, setSelectedAll] = useState([]);

  useEffect(() => {
    const getWorks = async () => {
      const works = await api.getSelectedWorks(selectedMonth, selectedYear);
      setSelectedAll(works);
    };

    getWorks();
  }, []);

  useEffect(() => {
    const getWorks = async () => {
      const works = await api.getSelectedWorks(selectedMonth, selectedYear);
      setSelectedAll(works);
    };

    getWorks();
  }, [selectedYear, selectedMonth]);

  const handleChangeYear = (value) => {
    setSelectedYear(value);
  };

  const handleChangeMonth = (value) => {
    setSelectedMonth(value);
  };

  const handleChangeDone = (id) => {
    const changingIndex = selectedAll.findIndex((work) => work.id === id);
    const newSelectedAll = Object.assign([], selectedAll);
    newSelectedAll[changingIndex].done = !newSelectedAll[changingIndex].done;

    setSelectedAll(newSelectedAll);
  };

  return (
    <div>
      <h1>React Todos</h1>
      <ButtonContainer>
        {YEARS.map((year) => {
          return (
            <div key={year}>
              <Button
                isYear="true"
                value={year}
                selected={selectedYear}
                onChangeYear={handleChangeYear}
              />
            </div>
          );
        })}
      </ButtonContainer>

      <ButtonContainer>
        {MONTHS.map((month) => {
          return (
            <div key={month}>
              <Button
                isYear="false"
                value={month}
                selected={selectedMonth}
                onChangeMonth={handleChangeMonth}
              />
            </div>
          );
        })}
      </ButtonContainer>
      <div>
        <Summary works={selectedAll} />
      </div>
      <Works>
        {selectedAll.map((work) => {
          return (
            <div key={work.id}>
              <Work work={work} onChangeDone={handleChangeDone} />
            </div>
          );
        })}
      </Works>
    </div>
  );
}
