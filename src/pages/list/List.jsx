import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from '../../hooks/useFetch'

const List = (props) => {

  // console.log(props.location.state.state)
  const [destination, setDestination] = useState(props.location.state.state.destination);
  const [date, setDate] = useState(props.location.state.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(props.location.state.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000000);


  const { data, loading, error, reFetch } = useFetch(`http://localhost:8800/hotels/?city=${destination}&min=${min}&max=${max}`)


  // console.log("lists",data)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text"
                onChange={e => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number"
                    onChange={e => setMin(e.target.value)}
                    // placeholder={min}
                    className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number"
                    onChange={e => setMax(e.target.value)}

                    className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={reFetch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading..." :
              data.map((item, index) => {
                return (
                  <SearchItem
                    key={index}
                    {...item}
                  />
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
