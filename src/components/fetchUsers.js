import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/users/usersSlice";

const FetchUsers = () => {
  const users = useSelector((state) => state.users.results);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [])

  return (

    <div className="App">
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {/* {JSON.stringify(users)} */}

      <ul>
        {users.map((user) => {
          return (<>
            <li><p>{user.name.first} <span>{user.name.last}</span></p></li>
          </>)
        })}
      </ul>
    </div>
  )
}

export default FetchUsers;