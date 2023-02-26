import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { EventsPage } from '../Pages/EventsPage';
import { HomePage } from '../Pages/HomePage';
import { EventsSubPage } from 'Pages/EventSubPage';
import { EventDetailsPage } from 'Pages/EventDetailsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="events/:id/details" element={<EventDetailsPage />}/>
      </Route>
    </Routes>
  );
};
