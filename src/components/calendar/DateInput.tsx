import React, { useState } from 'react'
import { format } from 'date-fns'
import {
  map,
  join,
  isArray,
} from 'lodash'

import DateRangePicker from './DateRangePicker'

import './DateInput.scss'


export default function DateInput(){
  const [show, setShow] = useState(false)
  const [date, setDate] = useState<Date | Date[]>(new Date())

  const formattedDate = () => {
    if (isArray(date)) {
      return join(map(date, value => (
        format(value, 'dd.MM.yy')
      )), ' - ')
    }

    return format(date, 'dd.MM.yy')
  }

  return (
    <label
      htmlFor="date-picker"
      onClick={() => setShow(!show)}
    >
      <input
        id="date-picker"
        className="date-input"
        value={formattedDate()}
        placeholder="Veldu dagsettningu"
        readOnly
      />

      <div className={`date-picker__calendar${show ? ' date-picker__calendar--show' : ''}`}>
        <DateRangePicker
          onChange={setDate}
        />
      </div>
    </label>
  )
}
