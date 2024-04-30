import { useParams } from "react-router-dom";
import { useEffect } from "react";

import "./SingleUser.scss";

const SingleUser = () => {
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        // const d = await getSingleUser();
      } catch (error) {}
    }
    getData();
  }, [id]);

  return (
    <div className="single-user">
      <h1>aksdnj</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default SingleUser;
