import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


// const [currentValue, setCurrentValue] =React.useState(0);
  // const [hoverValue, setHoverValue] =React.useState(undefined);
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};
// const handleClick = value => {
//   setCurrentValue(value)
// }

// const handleMouseOver = newHoverValue => {
//   setHoverValue(newHoverValue)
// };

// const handleMouseLeave = () => {
//   setHoverValue(undefined)
// }


const Reviewers = () => {
  const [reviewers, setReviewers] = useState([]);
//   const {_id,name,img,description} = props.detail;

const stars = Array(5).fill(0)


  useEffect(() => {
    fetch("https://calm-sands-82191.herokuapp.com/addReview")
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);
  console.log(reviewers);
  return (
    <div className="mt-5 ">
      <h1 className="text-primary text-center">What About Our Clients Says</h1>
      <h2 className="text-center">Our Reviewers</h2>
      <div className="services ">
        <div className="row container"> 
          {reviewers?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2" style={{ width: '', height:'450px'}} >
                <div className="service-img ">
                  {/* <img className="w-50" src={pd?.image} alt="" /> */}
                  <img className="img-fluid" src={pd.img} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <h3>{pd.address}</h3>
                {/* <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link> */}
    <div style={styles.container}>
      <h2>Ratings </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              // onClick={() => handleClick(index + 1)}
              // onMouseOver={() => handleMouseOver(index + 1)}
              // onMouseLeave={handleMouseLeave}
              // color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              // color={index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer",
                // color: "#FFBA5A",
                // color: "#a9a9a9",
              }}
            />
          )
            })}
        </div>
          </div>
       
          
        

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFBA5A",
    // color: "#a9a9a9",
  },
  // stars: {
  //   display: "flex",
  //   flexDirection: "row",
  // },
}

export default Reviewers;
