import React, { useState } from 'react';
import '../styles/Main.css';
import { FaPlus } from 'react-icons/fa';
import Calendar from '../pages/Calendar';
function Main() {
    const [showPage, setShowPage] = useState(false);
    const handlePage = () => {
        setShowPage(true);
    };
    return (
        <div className='homebg'>
            {!showPage && (
                <div className='plus-icon' onClick={handlePage}>
                    <FaPlus size={40} />
                </div>
            )}
            {showPage && <Calendar />}
        </div>
    );
}
export default Main;
