'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Account',
    path: '/account',
  },
];

const AppHeader = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-y-10 max-w-[1080px] mx-auto px-4">
      <header className="flex justify-between items-center border-b border-white/10 py-2">
        <Link href="/dashboard">
          <div className="font-semibold text-white">Expense Tracker</div>
        </Link>
        <nav>
          <ul className="flex gap-2 text-sm">
            {routes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.path}
                  className={`px-2 py-1 hover:text-white transition text-white/100 rounded-sm ${
                    route.path === pathname ? 'bg-black/10' : ''
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default AppHeader;
