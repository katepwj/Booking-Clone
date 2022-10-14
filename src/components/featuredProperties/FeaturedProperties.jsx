import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/hotels/?feature=true&limit=4")

  // console.log(data[0]._id)
  return (
    <div className="fp">
      {loading ? "loading..." :
        data.map((item, index) => {
          return (
            <div  key={index}>
              <Link to={`/hotel/${item._id}`} className="fpItem">

              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
              </div>
              </Link>

            </div>
          )
        })

      }
    </div>
  );
};

export default FeaturedProperties;


