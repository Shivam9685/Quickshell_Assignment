import React, { useState } from 'react';
import GroupSelector from './GroupSelector';
import TicketCard from './TicketCard';
import TicketCard1 from './TicketCard1';
import '../styles/KanbanBoard.css';

import Todo from '../assets/To-do.svg';
import Backlog from '../assets/Backlog.svg';
import Inprogress from '../assets/in-progress.svg';
import Done from '../assets/Done.svg';
import Cancelled from '../assets/Cancelled.svg';
import plus from '../assets/add.svg';
import moreop from '../assets/3 dot menu.svg';

import LowPriority from '../assets/Img - Low Priority.svg';
import MediumPriority from '../assets/Img - Medium Priority.svg';
import HighPriority from '../assets/Img - High Priority.svg';
import UrgentPriority from '../assets/SVG - Urgent Priority colour.svg';
import NoPriority from '../assets/3 dot menu.svg';

const KanbanBoard = ({ tickets, users }) => {
    const [grouping, setGrouping] = useState('status');
    const [ordering, setOrdering] = useState('priority');

    const statusImages = {
        Backlog: Backlog,
        Todo: Todo,
        'In progress': Inprogress,
        Done: Done,
        Canceled: Cancelled
    };

    const priorityImages = {
        0: NoPriority,
        1: LowPriority,
        2: MediumPriority,
        3: HighPriority,
        4: UrgentPriority
    };

    const priorityLabels = { 0: 'No Priority', 4: 'Urgent', 3: 'High', 2: 'Medium', 1: 'Low' };

    const groupTickets = () => {
        if (grouping === 'status') {
            const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
            const groups = statuses.reduce((acc, status) => {
                acc[status] = [];
                return acc;
            }, {});

            tickets.forEach((ticket) => {
                const status = ticket.status || 'Backlog';
                if (groups[status]) {
                    groups[status].push(ticket);
                }
            });
            return groups;
        }

        if (grouping === 'priority') {
            const groups = {};
            tickets.forEach((ticket) => {
                const priority = ticket.priority || 0;
                if (!groups[priority]) {
                    groups[priority] = [];
                }
                groups[priority].push(ticket);
            });
            return groups;
        }

        if (grouping === 'user') {
            const groups = {};
            tickets.forEach((ticket) => {
                const user = ticket.userId ? users.find(u => u.id === ticket.userId).name : 'Unassigned';
                if (!groups[user]) {
                    groups[user] = [];
                }
                groups[user].push(ticket);
            });
            return groups;
        }

        return {};
    };

    const sortedTickets = (group) => {
        return groupedTickets[group].sort((a, b) => {
            if (ordering === 'priority') {
                return b.priority - a.priority;  // Priority in descending order
            } else if (ordering === 'title') {
                return a.title.localeCompare(b.title); // Title in alphabetical order
            }
            return 0; // Default sorting (no change)
        });
    };

    const groupedTickets = groupTickets();

    return (
        <div className="kanban-board">
            <div className="kanban-header">
                <GroupSelector
                    grouping={grouping}
                    setGrouping={setGrouping}
                    setOrdering={setOrdering}
                    ordering={ordering}
                />
            </div>
            <div className="kanban-columns">
                {Object.keys(groupedTickets)
                    .sort((a, b) => {
                        if (grouping === 'priority') {
                            const priorityOrder = [0, 4, 3, 2, 1];
                            return priorityOrder.indexOf(parseInt(a)) - priorityOrder.indexOf(parseInt(b));
                        }
                        return 0;
                    })
                    .map((group) => (
                        <div className="kanban-column" key={group}>
                            <h6 style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                                {grouping === 'status' && (
                                    <>
                                        <img
                                            src={statusImages[group]}
                                            alt={group}
                                            style={{ paddingRight: '5px', height: '16px' }}
                                        />
                                        {group}
                                    </>
                                )}
                                {grouping === 'priority' && (
                                    <>
                                        <img
                                            src={priorityImages[group]}
                                            alt={priorityLabels[group]}
                                            style={{ paddingRight: '5px', height: '16px' }}
                                        />
                                        {priorityLabels[group]}
                                    </>
                                )}
                                {grouping === 'user' && (
                                    <>
                                        {group}
                                    </>
                                )}
                                <span className="ticket-count" style={{ paddingLeft: '10px' }}>
                                    {groupedTickets[group].length}
                                </span>
                                <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
                                    <img src={plus} alt="Add" />
                                    <img src={moreop} alt="More Options" />
                                </div>
                            </h6>
                            {sortedTickets(group).map((ticket) =>
                                grouping === 'status' ? (
                                    <TicketCard key={ticket.id} ticket={ticket} />
                                ) : (
                                    <TicketCard1 key={ticket.id} ticket={ticket} />
                                )
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
