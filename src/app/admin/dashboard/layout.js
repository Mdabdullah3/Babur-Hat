import Sidebar from "../../../components/layout/Sidebar";

export const metadata = {
    title: 'Dashboard - Babur Hat',
    description: 'Dashboard section of Babur Hat',
};

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <header>
                <Sidebar />
            </header>
            <div className="flex flex-col flex-1">
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}
