import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RiAccountCircleFill } from "react-icons/ri";
import { getFromLocalStorage, getSingleUser } from "../../../api/api";

import "./SingleUser.scss";

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [states, setStates] = useState({ loading: false, error: false });

  useEffect(() => {
    async function getData() {
      try {
        setStates({ loading: true, error: false });
        const { data } = await getSingleUser(
          getFromLocalStorage("accessToken"),
          id
        );
        setUser(data);
      } catch (error) {
        console.log(error);
        setStates({ loading: false, error: true });
      } finally {
        setStates((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
    }
    getData();
  }, [id]);

  return (
    <div className="single-user">
      <aside className="single-user-sidebar">
        <div className="my-account-sidebar-avatar">
          <RiAccountCircleFill />
        </div>
        <p>{states.loading ? "loading..." : user.name}</p>
        <p>{states.loading ? "loading..." : user.email}</p>
      </aside>
      <div className="single-user-content">
        <h1>{id}</h1>
      </div>
    </div>
  );
};

export default SingleUser;
