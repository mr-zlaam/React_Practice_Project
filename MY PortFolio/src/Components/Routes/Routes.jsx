import { } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

const Routess = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home />} />
                ''          <Route path='/About' element={<About />} />
                <Route path='/Work' element={<Work />} />
                <Route path='/Contact' element={<Contact />} />

            </Routes>
        </>
    )
};

export default Routess;