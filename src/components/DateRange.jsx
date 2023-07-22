import  {React,  useState , useEffect } from 'react'
import DatePicker from 'react-datepicker'

export const DateRange = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    );
  };

  export default DateRange;