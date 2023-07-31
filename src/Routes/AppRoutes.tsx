import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTE ELEMENT DIRECTORY
import Home from '../pages/home/Pages';
import Profile from '../pages/profile/Pages'


export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
