import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTE ELEMENT DIRECTORY
import Home from '../pages/home/Home';


export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
