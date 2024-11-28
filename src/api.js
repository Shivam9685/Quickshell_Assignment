import axios from 'axios';

const API_BASE_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchTickets = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        const { tickets, users } = response.data;
        return {
            tickets: Array.isArray(tickets) ? tickets : [],
            users: Array.isArray(users) ? users : []
        };
    } catch (error) {
        console.error("Error fetching tickets:", error);
        return { tickets: [], users: [] };
    }
};


