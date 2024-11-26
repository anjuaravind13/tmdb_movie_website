import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom";

function Home() {
  // let [count, setCount] = useState(0);
  let num = useRef(0);

  let [data, setData] = useState([]);

  const colors = [
    "#FFB3B3",
    "#B3FFB3",
    "#B3B3FF",
    "#FFEB99",
    "#D9A5D9",
    "#FFB3B3",
    "#A2D2FF",
  ];

  let dummyArr = [1, 2, 3, 4];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          let res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          // .then((res) => {
          console.log(res.data);
          setData(res.data);
        } catch (error) {
          // .catch((err) => {
          //   console.log(err);
          // });

          console.log(err);
        }
      })();
    }, 0);
  }, []);

  // function increaseCount() {
  //   count++;
  //   setCount(count);
  // }

  // function increaseNum() {
  //   num.current = num.current + 1;
  //   console.log(num.current);
  // }

  // console.log("num--->", num.current);
  // console.log("count-->", count);

  if (data.length === 0) {
    return (
      <>
        {dummyArr.map(() => {
          return <Loading />;
        })}
      </>
    );
  }

  return (
    <>
      {/* <h1>count - {count}</h1>
      <h1>num - {num.current}</h1>

      <button onClick={increaseCount}>count</button>
      <button onClick={increaseNum}>num</button> */}

      {data.map((obj, index) => {
        return (
          <div key={obj.id}>
            <Link to={`/${obj.id}`}>
              <div
                style={{
                  backgroundColor: colors[index % colors.length],
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  margin:'20px'
                }}
              >
                <h1>
                  {obj?.id} - {obj?.title}
                </h1>
                <p>{obj?.body}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Home;
