import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'

export default createRoutesFromElements(
  <Route path="/">
    <Route index element={<App />} />
    {/* <Route path="/edit/:id" element={<EditTodo />} /> */}
  </Route>,
)
