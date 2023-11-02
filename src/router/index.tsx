import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ResultsPage } from '../pages/resultsPage'
import { HomePage } from '../pages/mainPage'
import { ErrorContextProvider } from '../context/ErrorContext'

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <ErrorContextProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/results' element={<ResultsPage />} />
                </Routes>
            </ErrorContextProvider>
        </BrowserRouter>
    )
}
