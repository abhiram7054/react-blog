import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
  // const location = useLocation();
  // console.log(location);

  const [posts, setPosts]  = useState([]);

  useEffect(()=> {
    const fetchPost = async () => {
      const res = await axios.get("/posts")
      console.log("res is",res);
    }
    fetchPost();
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
