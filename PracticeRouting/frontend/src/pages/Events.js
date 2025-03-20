import { Link } from 'react-router-dom';

export default function EventsPage() {
    const DUMMY_EVENTS = [
        { id: 'e1', title: 'Programming for Everyone', description: 'This is a first event!', date: '2022-03-18' },
        { id: 'e2', title: 'Networking for Introverts', description: 'This is the second event!', date: '2022-04-10' },
        { id: 'e3', title: 'Networking for Extroverts', description: 'This is the third event!', date: '2022-05-15' },
        { id: 'e4', title: 'Networking for Ambiverts', description: 'This is the fourth event!', date: '2022-06-20' }
    ]

    return (
        <div>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}