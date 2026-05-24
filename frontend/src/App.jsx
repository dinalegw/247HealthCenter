import { useEffect, useState } from 'react';
import HealthCenterApp from './pages/HealthCenterApp';
import AIAssistantProvider from './components/AIAssistantProvider';

export default function App() {
  const [health, setHealth] = useState(null);
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [healthRes, usersRes, appointmentsRes] = await Promise.all([
          fetch('/api/health'),
          fetch('/api/users'),
          fetch('/api/appointments'),
        ]);

        if (healthRes.ok) setHealth(await healthRes.json());
        if (usersRes.ok) setUsers(await usersRes.json());
        if (appointmentsRes.ok) setAppointments(await appointmentsRes.json());
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <AIAssistantProvider siteData={{ health, users, appointments }}>
      <HealthCenterApp />
    </AIAssistantProvider>
  );
}