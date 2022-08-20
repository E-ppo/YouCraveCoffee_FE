import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main"
import WriteCafeInfo from "./page/cafe/WriteCafeInfo"

function Router() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/write/cafeinfo" element={<WriteCafeInfo/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Router;