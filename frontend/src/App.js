import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import NewPost from "./components/Post/NewPost";
import UserProfile from "./components/User/UserProfile";
import PageNotFound from "./components/PageNotFound";
import ChatLayout from "./components/ChatLayout/ChatLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./components/Home/Home";
import HomeWrapper from "./components/Home/HomeWrapper";
import UserProfileWrapper from "./components/User/UserProfileWrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/profile/:id" element={<UserProfileWrapper />}>
            <Route index path="/user/profile/:id" element={<UserProfile />} />
            <Route  path="/user/profile/:id/newpost" element={<NewPost />} />
          </Route>
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <HomeWrapper />
              </ProtectedRoute>
            }
          >
            <Route index path="/" element={<Home />} />

            <Route
              path="/user/chats"
              element={
                <ProtectedRoute>
                  <ChatLayout />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
