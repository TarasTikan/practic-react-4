import { fetchEvents } from 'Services/servicesApi';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
  return (
    <div>
      <ul>
        {events.map(({ id, name }) => {
         return <li key={id}>
            <Link to={id}>{name}</Link>
          </li>;
        })}
      </ul>
      <Outlet />
    </div>
  );
};
