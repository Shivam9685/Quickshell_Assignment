import React, { useState } from 'react';
import '../styles/GroupSelector.css';
import DisplayIcon from '../assets/Display.svg';
import DropdownArrow from '../assets/down.svg';

const GroupSelector = ({ setGrouping, grouping, setOrdering, ordering }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <div className="group-selector-container">
            <div className="group-selector-header" onClick={toggleDropdown}>
                <img src={DisplayIcon} alt="Display Icon" className="group-icon" />
                <span className="group-display-text">Display</span>
                <img
                    src={DropdownArrow}
                    alt="Dropdown Arrow"
                    className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-section">
                        <h4>Grouping</h4>
                        <select
                            value={grouping}
                            onChange={(e) => setGrouping(e.target.value)}
                            className="dropdown-select"
                        >
                            <option value="status">Status</option>
                            <option value="priority">Priority</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className="dropdown-section">
                        <h4>Ordering</h4>
                        <select
                            value={ordering}
                            onChange={(e) => setOrdering(e.target.value)}
                            className="dropdown-select"
                        >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupSelector;
