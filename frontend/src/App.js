import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import NewPost from "./components/Post/NewPost";
import UserProfile from "./components/User/UserProfile";
import PageNotFound from "./components/PageNotFound";
import ChatLayout from "./components/ChatLayout/ChatLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomeWrapper from "./components/Home/HomeWrapper";
import UserProfileWrapper from "./components/User/UserProfileWrapper";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ReelsPage from "./components/Home/Middle/Reels/ReelsPage";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="*" element={<PageNotFound />} />
          <Route path="/user/profile/:id" element={<UserProfileWrapper />}>
            <Route index path="/user/profile/:id" element={<UserProfile />} />
            <Route path="/user/profile/:id/newpost" element={<NewPost />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route  path="/" element={<Home />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <HomeWrapper />
              </ProtectedRoute>
            }
          >
            
            <Route exact path="/reels" element={<ReelsPage />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route
              path="/user/chats"
              element={
                <ProtectedRoute>
                  <ChatLayout />
                </ProtectedRoute>
              }
            />
          </Route>

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
