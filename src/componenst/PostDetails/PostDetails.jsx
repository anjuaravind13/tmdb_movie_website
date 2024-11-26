import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetails() {
    let [data, setData] = useState({});
    let {id} = useParams()
    
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          let res =await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          console.log(res.data);
          setData(res.data);
        } catch (error) {
          console.log(err);
        }
      })();
    }, 0);
  }, []);
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default PostDetails