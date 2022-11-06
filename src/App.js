import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./app/features/user/userSlice";

function App() {

  let dispatch = useDispatch();
  let user = useSelector(state=>state.user.value)

  function newUser(){
    dispatch(setUser({ name: 'Musab Abbasi'}))
  }

  return (
    <div className="">
      {user?.name}
      <br />
      <button onClick={()=>newUser()}>Set User</button>
    </div>
  );
}

export default App;
