import React from 'react';
import optionss from '../assets/3 dot menu.svg'

import LowPriority from '../assets/Img - Low Priority.svg';
import MediumPriority from '../assets/Img - Medium Priority.svg';
import HighPriority from '../assets/Img - High Priority.svg';
import UrgentPriority from '../assets/SVG - Urgent Priority colour.svg';
import NoPriority from '../assets/3 dot menu.svg';



const priorityImages = {
    0: NoPriority,
    1: LowPriority,
    2: MediumPriority,
    3: HighPriority,
    4: UrgentPriority
};

const TicketCard = ({ ticket, userName }) => {
    return (
        <div className="ticket-card">
            
            <div className="ticket-card-header" style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
               <span className="ticket-id" style={{ opacity: '0.4', marginRight: '8px' }}>
                    {ticket.id}
                </span>
                <div style={{ whiteSpace: "nowrap"}}>
                <img
                    src={priorityImages[ticket.priority]}
                    alt="Priority Icon"
                    style={{ height: '16px', width: '16px', marginRight: '8px' }}
                />

                <span className="ticket-title" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {ticket.title}
                </span>
                </div>
            </div>





            <div className="ticket-card-body">
                <p className="ticket-type">{ticket.type}</p>
                {userName && <p className="ticket-user">Assigned to: {userName}</p>}
                <p className="feature-request-wrapper">
                    <span className="feature-image-box">
                        <img src={optionss} alt="Feature Request" className="feature-image" />
                    </span>
                    <span className="feature-text-box">
                        Feature Request
                    </span>
                </p>

            </div>
        </div>
    );
};

export default TicketCard;
