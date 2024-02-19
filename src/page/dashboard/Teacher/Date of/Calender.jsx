/* eslint-disable react/prop-types */
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './class.css'
const DateCatch = () => {
    // const [state, setState] = useState({
    //     selection: {
    //       startDate: new Date(),
    //       endDate: null,
    //       key: 'selection'
    //     },
    //     compare: {
    //       startDate: new Date(),
    //       endDate: addDays(new Date(), 3),
    //       key: 'compare'
    //     }
    //   });
    const [state, setState] = useState([
        {
            startDate: (new Date()),
            endDate: addDays(null),
            key: 'selection'
        }
    ]);
    console.log(state);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-white my-5">Date range is Comming Now</h1>
            <div className="w-auto h-auto flex items-center justify-center flex-col gap-5 ">
                <DateRange className="w-full md:w-2/3 lg:w-1/2 mx-auto p-5"
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    minDate={new Date()}
                />
                {/* <DateRangePicker
                    onChange={item => setState({ ...state, ...item })}
                    months={1}
                    minDate={addDays(new Date(), -30)}
                    maxDate={addDays(new Date(), 30)}
                    direction="vertical"
                    scroll={{ enabled: true }}
                    ranges={[state.selection, state.compare]}
                />; */}
            </div>

        </div>
    );
};

export default DateCatch;