import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main"
import WritePost from "./page/WritePost"

function Router() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/write" element={<WritePost/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Router;