import { FiTrash2 } from "react-icons/fi";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export function TransactionsTable() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Valor</Th>
            <Th>Categotia</Th>
            <Th>Data</Th>
            <Th>Deletar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.title}</Td>
              <Td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </Td>
              <Td>{transaction.category}</Td>
              <Td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </Td>
              <Td>
                <button
                  type="button"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <FiTrash2 size={20} />
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
