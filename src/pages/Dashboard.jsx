import DashboardLayout from "../layouts/DashboardLayout"
import DashboardCards from "../components/DashboardCards"
import TransactionsTable from "../components/TransactionsTable"

function Dashboard() {
  return (
    <DashboardLayout>

      <h2>Dashboard</h2>

      <DashboardCards />

      <div style={{ marginTop: "30px" }}>
        <TransactionsTable />
      </div>

    </DashboardLayout>
  )
}

export default Dashboard