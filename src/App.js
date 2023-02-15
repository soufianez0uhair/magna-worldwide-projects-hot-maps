import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./components/SignUp";
import SplitScreen from "./layout/SplitScreen";

const App = () => {
  const Left = <h1>left</h1>
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/user/signup" element={<SplitScreen children={[Left,SignUp]} />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;