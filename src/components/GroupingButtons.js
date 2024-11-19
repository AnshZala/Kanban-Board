import React, { useState, useRef, useEffect } from "react";
import "../styles/GroupingButtons.css";
import { LucideChevronDown, LucideSettings } from "lucide-react";

const GroupingButtons = ({ onGroupChange, grouping, onOrderChange }) => {
    const [showPopover, setShowPopover] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowPopover(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="display-container" ref={containerRef}>
            <button
                className="display-button"
                onClick={() => setShowPopover(!showPopover)}
            >
                <span> <LucideSettings className="LucideSettings" /><span> Display </span></span>
                <span className="dropdown-icon"> <LucideChevronDown /></span>
            </button>

            {showPopover && (
                <div className="popover">
                    <div className="popover-section">
                        <div className="section-title">Grouping</div>
                        <select
                            value={grouping}
                            onChange={(e) => onGroupChange(e.target.value)}
                            className="dropdown"
                        >
                            <option value="status">Status</option>
                            <option value="userId">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>

                    <div className="popover-section">
                        <div className="section-title">Ordering</div>
                        <select className="dropdown" onChange={(e) => onOrderChange(e.target.value)}>
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GroupingButtons;
