import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

const fetchUsers = () => {
    const user = useSelector((state) => state.users.users);
    const isLoading = useSelector((state) => state.users.isLoading);
    const error = useSelector((state) => state.users.error);
    const dispatch = useDispatch();

    const [onLoading,setOnLoading] = useState();
    
  return (
    <div>fetchUsers</div>
  )
}

export default fetchUsers