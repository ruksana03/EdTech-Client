import { useState } from 'react';
import Calender from './Calender'
const DateInfo = () => {
    // const [value, setValue] = useState({
    //     startDate: new Date(),
    // endDate: addDays(new Date(), 7),
    //     key: 'selection',
    //   })
    
    //   const handleSelect = (value) => {
    //     setValue({ ...value })
    //   }
    
    return (
        <div>
            <div>
        <Calender/>
      </div>
        </div>
    );
};

export default DateInfo;