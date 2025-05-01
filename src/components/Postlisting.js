import { useState, useEffect, useContext } from "react";
// import axios from "axios";
import Redditmain from "./Post";
import RerenderContext from "../context/RerenderContext";
import CommunityContext from "../context/CommunityContext";
import AuthModalContext from "../context/AuthModalContext";

const Postlisting = () => {
  const [comments, setComments] = useState([]);
  const { newPosts, deleted } = useContext(RerenderContext);
  const { chosenCommunity } = useContext(CommunityContext);
  const { lightMode } = useContext(AuthModalContext);
const data = [
  {
    _id : "y38y83y835",
    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working Fine!",
    chosenCommunity: "Devops"


  },
  {

    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working",
    chosenCommunity: "Devops"


  },
  {
   
    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working",
    chosenCommunity: "Devops"


  },
  {

    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working",
    chosenCommunity: "Devops"


  },
  {

    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working",
    chosenCommunity: "Devops"


  },
  {

    author: "Chiemela",
    title: "You are doing great!",
    postedAt: new Date(),
    body: "Client side is working",
    chosenCommunity: "Devops"


  },


]
  const theLightMode = lightMode
    ? "app-reddit-story-light"
    : "app-reddit-story ";
  let url =
    chosenCommunity === null
      ? "/comments"
      : `/comments?chosenCommunity=${chosenCommunity}`;

  useEffect(() => {
    // const getComments = async () => {
    //   const response = await axios.get(url, {
    //     withCredentials: true,
    //   });

    // };
    setComments(data);
    // getComments();
  }, [deleted, newPosts, chosenCommunity]);
  
  return (
    <div className={theLightMode}>
      {comments.map((comment) => (
        <Redditmain {...comment} key={comment._id} />
      ))}
    </div>
  );
};

export default Postlisting;
