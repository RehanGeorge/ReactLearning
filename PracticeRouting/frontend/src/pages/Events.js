import { Link } from 'react-router-dom';

export default function EventsPage() {
    const DUMMY_EVENTS = [
        {
            id: 'e1',
            title: 'Programming for Everyone',
            description: 'This is a first event!',
        },
        {
            id: 'e2',
            title: 'Networking for Introverts',
            description: 'This is the second event!',
        },
        {
            id: 'e3',
            title: 'Networking for Extroverts',
            description: 'This is the third event!',
        }
    ]

    return (
        <div>
            <h1>This is the Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={event.id} state={{ description: event.description }}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}