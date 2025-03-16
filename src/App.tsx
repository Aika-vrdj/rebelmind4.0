import { Routes, Route, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import TypeDetail from './components/TypeDetail'
import Footer from './components/Footer'

function TypeDetailWrapper() {
  const { typeId } = useParams();
  return <TypeDetail typeNumber={Number(typeId)} />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/type/:typeId" element={<TypeDetailWrapper />} />
      </Routes>
      <Footer />
    </>
  )
}
