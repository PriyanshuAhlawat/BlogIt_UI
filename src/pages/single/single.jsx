import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlepost/singlepost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}