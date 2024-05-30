import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularUsers } from "../../../api/api";
import TopUsersItem from "./top-users-item/TopUsersItem";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getPopularUsers();
        setTopUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <aside className="home-poets">
      <h1>Թոփ Պոետներ</h1>
      <div className="home-poets-list">
        {topUsers &&
          topUsers.slice(0, 3).map((item) => {
            return <TopUsersItem key={item.id} item={item} />;
          })}
      </div>
    </aside>
  );
};

export default TopUsers;
