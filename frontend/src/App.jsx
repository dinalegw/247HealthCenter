import { useEffect, useMemo, useState } from 'react';

export default function HealthCenterApp() {
  const [health, setHealth] = useState(null);
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const [healthRes, usersRes, appointmentsRes] = await Promise.all([
          fetch('/api/health'),
          fetch('/api/users'),
          fetch('/api/appointments'),
        ]);

        if (!healthRes.ok || !usersRes.ok || !appointmentsRes.ok) {
          throw new Error('Failed to load API data');
        }

        setHealth(await healthRes.json());
        setUsers(await usersRes.json());
        setAppointments(await appointmentsRes.json());
      } catch (err) {
        console.error(err);
        setError('Live backend data is unavailable.');
      }
    }

    loadData();
  }, []);

  const nextAppointment = useMemo(
    () => appointments[0] ?? { patient: 'Claire Patient', clinician: 'Dr. Amanda Cole', scheduled: 'May 24, 2026 10:30 AM' },
    [appointments]
  );

  const healthStatus = health?.status ?? 'loading';
  const statusBadgeClasses = healthStatus === 'ok' ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300' : 'bg-amber-500/10 border-amber-400/30 text-amber-300';

  const features = [
    {
      title: 'Remote Consultation',
      description:
        'Connect instantly with certified doctors through secure online video appointments from anywhere.',
      icon: '🩺',
    },
    {
      title: 'Specialist Access',
      description:
        'Get referred to top specialists for advanced diagnosis and treatment recommendations.',
      icon: '👨‍⚕️',
    },
    {
      title: 'Emergency Coverage',
      description:
        'Register emergency support coverage for rapid response during urgent situations.',
      icon: '🚑',
    },
    {
      title: 'Home Service Booking',
      description:
        'Schedule nurses, diagnostics, and medical visits directly to your home.',
      icon: '🏠',
    },
  ];

  const services = [
    '24/7 Video Consultation',
    'Emergency Response Registration',
    'Appointment Scheduling',
    'Digital Medical Records',
    'Doctor & Specialist Matching',
    'Home Clinical Visits',
  ];

  const stats = [
    { label: 'Doctors Available', value: '150+' },
    { label: 'Patients Supported', value: '12K+' },
    { label: 'Emergency Partners', value: '30+' },
    { label: 'Remote Sessions', value: '50K+' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              247<span className="text-emerald-400">HealthCenter</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#emergency" className="hover:text-white transition">
              Emergency
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition text-sm">
              Sign In
            </button>
            <button className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition font-semibold text-black text-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${statusBadgeClasses} text-sm mb-6`}>
              <span className={`w-2 h-2 rounded-full ${healthStatus === 'ok' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              {healthStatus === 'ok' ? 'Live backend online' : healthStatus}
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Healthcare Access
              <span className="block text-emerald-400">Without The Wait.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 leading-8 max-w-xl">
              247HealthCenter connects patients, doctors, and specialists through secure online care, emergency coordination, and home medical services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-bold shadow-2xl shadow-emerald-500/20">
                Book Consultation
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold">
                Explore Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-black text-emerald-400">{stat.value}</h3>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-slate-400 text-sm">Next Appointment</p>
                  <h3 className="text-2xl font-bold mt-1">Video Consultation</h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-2xl text-black">
                  📹
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Doctor</p>
                      <h4 className="font-bold text-lg mt-1">{nextAppointment.clinician}</h4>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-xl">
                      👩‍⚕️
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                    <p className="text-sm text-slate-400">Date</p>
                    <h4 className="font-bold mt-2">{nextAppointment.scheduled}</h4>
                  </div>

                  <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-5">
                    <p className="text-sm text-slate-400">Patient</p>
                    <h4 className="font-bold mt-2">{nextAppointment.patient || 'Claire Patient'}</h4>
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold">
                  Join Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white">Live Platform Snapshot</h3>
            <p className="mt-3 text-slate-400 max-w-2xl">
              This dashboard is connected to the backend API so the UI reflects live users, appointments, and service status.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Active Users</p>
                <p className="mt-5 text-4xl font-black text-emerald-400">{users.length}</p>
                <p className="mt-3 text-slate-400">Users loaded from the backend API.</p>
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Appointments</p>
                <p className="mt-5 text-4xl font-black text-cyan-400">{appointments.length}</p>
                <p className="mt-3 text-slate-400">Upcoming appointments synced with the server.</p>
              </div>

              <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">API Status</p>
                <p className="mt-5 text-4xl font-black text-emerald-400">{healthStatus}</p>
                <p className="mt-3 text-slate-400">{error || 'Backend is responding normally.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">
              Platform Features
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">
              Everything Needed For Modern Digital Healthcare
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-emerald-400/40 hover:bg-white/10 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold">{feature.title}</h3>

                <p className="mt-4 text-slate-400 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">Core Services</p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Designed Around Patient Comfort And Fast Access To Care
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-8">
              Patients can consult doctors remotely, escalate serious cases to physical hospitals, and request home-based treatment without the stress of crowded waiting rooms.
            </p>

            <div className="mt-10 space-y-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    ✓
                  </div>

                  <p className="font-medium text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl bg-gradient-to-b from-emerald-500 to-cyan-500 p-[1px]">
              <div className="rounded-3xl bg-slate-950 p-8 h-full">
                <div className="text-5xl mb-6">🧑‍⚕️</div>
                <h3 className="text-2xl font-bold">Doctor Matching</h3>
                <p className="mt-4 text-slate-400 leading-7">
                  Smart patient routing to doctors and specialists based on symptoms and medical needs.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 mt-10">
              <div className="text-5xl mb-6">📋</div>
              <h3 className="text-2xl font-bold">Digital Records</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Secure patient records accessible by authorized healthcare providers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 -mt-10">
              <div className="text-5xl mb-6">🚨</div>
              <h3 className="text-2xl font-bold">Emergency Dispatch</h3>
              <p className="mt-4 text-slate-400 leading-7">
                Emergency coverage and fast-response coordination for critical situations.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-cyan-500 to-blue-500 p-[1px]">
              <div className="rounded-3xl bg-slate-950 p-8 h-full">
                <div className="text-5xl mb-6">🏡</div>
                <h3 className="text-2xl font-bold">Home Care</h3>
                <p className="mt-4 text-slate-400 leading-7">
                  Coordinate in-home nursing, specialist visits, and medical diagnostics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section id="emergency" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] overflow-hidden border border-red-500/20 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 p-10 md:p-16 relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="uppercase tracking-[0.3em] text-red-300 text-sm font-semibold">Emergency Support</p>

                <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
                  Fast Emergency Response Registration
                </h2>

                <p className="mt-6 text-slate-300 text-lg leading-8">
                  Register your household for emergency healthcare coverage and reduce delays when urgent medical attention is needed.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-950/70 border border-white/10 p-8 backdrop-blur">
                <h3 className="text-2xl font-bold mb-6">Emergency Registration</h3>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-red-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-red-400"
                  />

                  <input
                    type="text"
                    placeholder="Emergency Location"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-red-400"
                  />

                  <button className="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-400 transition text-white font-bold">
                    Activate Coverage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-black">
              247<span className="text-emerald-400">HealthCenter</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              A next-generation healthcare platform connecting patients, doctors, specialists, and emergency services.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Platform</h3>

            <div className="space-y-3 text-slate-400">
              <p>Remote Consultation</p>
              <p>Specialist Access</p>
              <p>Emergency Coverage</p>
              <p>Home Services</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Resources</h3>

            <div className="space-y-3 text-slate-400">
              <p>Documentation</p>
              <p>Support</p>
              <p>Developers</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Contact</h3>

            <div className="space-y-3 text-slate-400">
              <p>support@247healthcenter.com</p>
              <p>+234 800 000 0000</p>
              <p>24/7 Live Healthcare Support</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 247HealthCenter. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
