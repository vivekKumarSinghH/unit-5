import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Summary from "./Components/summary";
import TodoCreate from "./Components/TodoCreate";
import TodoEdit from "./Components/TodoEdit";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const { isAuth } = useSelector((store) => store.login);

  return (
    <div>
      <div className="flex justify-around text-2xl">
        <Link to="/">Home</Link>
        <Link to="/todocreate">Create Todo</Link>
        <Link to="/summary">Summary</Link>
        <Link to="login">Login</Link>
        
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/todocreate"
          element={
            <PrivateRoute isAuth={isAuth}>
              <TodoCreate />
            </PrivateRoute>
          }
        />
        <Route
        path="/todos/:id/edit"
        element={
          <PrivateRoute isAuth={isAuth}>
          <TodoEdit/>
          </PrivateRoute>
        }
      />
      <Route
      path="/summary"
      element={
        <PrivateRoute isAuth={isAuth}>
        <Summary/>
        </PrivateRoute>
      }
    />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
