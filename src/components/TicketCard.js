import React from 'react';
import '../styles/TicketCard.css';
import optionss from '../assets/3 dot menu.svg';
import profileImage from './logo.jpeg';

const TicketCard = ({ ticket, userName }) => {
    return (
        <div className="ticket-card" style={{ position: 'relative' }}>
            {/* Add Circle for Image */}
            <div 
                className="circle-image" 
                style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #ddd',
                }}
            >
                <img 
                    src={profileImage}
                    alt="Profile" 
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }} 
                />
            </div>

            <div className="ticket-card-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div
                    className="ticket-id"
                    style={{ opacity: '0.4', marginBlockStart: '0', textAlign: 'left', width: '100%' }}
                >
                    {ticket.id}
                </div>
                <div
                    className="ticket-title"
                    style={{ textAlign: 'left', width: '100%', marginTop: '5px' }}
                >
                    {ticket.title}
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
