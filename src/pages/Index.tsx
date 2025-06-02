import BalanceDashboard from "@/components/BalanceDashboard";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <BalanceDashboard />
      </main>
    </div>
  );
};

export default Index;
