const statusEl = document.getElementById('status');
const usersEl = document.getElementById('users');
const appointmentsEl = document.getElementById('appointments');

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

function renderUsers(users) {
  if (!users.length) return '<p>No users found.</p>';
  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr><th align="left">Name</th><th align="left">Role</th></tr></thead>
      <tbody>
        ${users.map(user => `<tr><td>${user.name}</td><td>${user.role}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
}

function renderAppointments(appts) {
  if (!appts.length) return '<p>No appointments found.</p>';
  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead><tr><th>Patient</th><th>Clinician</th><th>Status</th><th>Scheduled</th></tr></thead>
      <tbody>
        ${appts.map(a => `<tr><td>${a.patient}</td><td>${a.clinician}</td><td>${a.status}</td><td>${a.scheduled}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
}

async function loadData() {
  try {
    const health = await fetchJson('/api/health');
    statusEl.innerHTML = `<strong>${health.service}</strong> is ${health.status}.`;
  } catch (error) {
    statusEl.textContent = 'Unable to load system status.';
    console.error(error);
  }

  try {
    const users = await fetchJson('/api/users');
    usersEl.innerHTML = renderUsers(users);
  } catch (error) {
    usersEl.innerHTML = '<p>Unable to load users.</p>';
    console.error(error);
  }

  try {
    const appointments = await fetchJson('/api/appointments');
    appointmentsEl.innerHTML = renderAppointments(appointments);
  } catch (error) {
    appointmentsEl.innerHTML = '<p>Unable to load appointments.</p>';
    console.error(error);
  }
}

loadData();
