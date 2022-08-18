import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/hotels/countByType")


  return (
    <div className="pList">
      {loading ? "loading..." : (
        data.map((item, index) => {
          return (
            <div className="pListItem" key={index}>
              <img
                src={item.img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1 >{item.type}</h1>
                <h2>{item.count} {item.type}</h2>
              </div>
            </div>
          )
        })
      )
      }
    </div>
  );
};

export default PropertyList;

