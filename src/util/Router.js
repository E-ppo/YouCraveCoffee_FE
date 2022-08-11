import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main"

function Router() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Router;