import DashboardSider from '@/components/dashboard/Sider';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-1 min-h-screen bg-slate-950'>
      <div className='h-full w-96'>
        <DashboardSider />
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
}
