import './App.css';
import { useState } from 'react';
import CalendarDay from './components/CalendarDay'
const dayjs = require('dayjs')

function App() {

  const date = dayjs()
  const [today, setToday] = useState(date.format('D'));
  const [firstOfMonth, setFirstOfMonth] = useState(date.subtract(parseInt(today) - 1, 'days').day());
  const [daysInMonth, setDaysInMonth] = useState(date.daysInMonth());

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const getDay = i => {
    const adjustedDate = (i - firstOfMonth + 1)
    if(i < firstOfMonth || adjustedDate > daysInMonth) {
      return ''
    } else {
      return adjustedDate
    }
  }
  const isToday = i => {
    const adjustedDate = (i - firstOfMonth + 1)
    if(adjustedDate == today) {
      return 'today'
    }
  }

  return (
    <main>
      {/* <button onClick={getDates}>do thing</button> */}
      <div id='calendar-container'>
          <div id='days-of-week-cont'>
              {daysOfWeek.map((e, i) => (
                <div key={e}>{e}</div>
              ))}
          </div>
          <div id='days-cont'>
            {Array.apply(null, { length: 35 }).map((e, i) => (
              <div className='day' id={isToday(i)} key={`box ${i}`}>{getDay(i)}</div>
            ))}
          </div>
      </div>

      

    </main>
  );
}

export default App;
