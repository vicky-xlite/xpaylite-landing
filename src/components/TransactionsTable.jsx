import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

function TransactionsTable() {

  const data = [
    { id: 1, customer: "Rahul", amount: "₹500", status: "Success" },
    { id: 2, customer: "Amit", amount: "₹1200", status: "Pending" },
  ]

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}

export default TransactionsTable