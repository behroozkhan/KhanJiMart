import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
const Home = lazy(()=> import('../pages/Home'));



const Router = () => {
    return (
            <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
        </Suspense>
    )
}

export default Router;

