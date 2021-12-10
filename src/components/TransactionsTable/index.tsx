import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categotia</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Densenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Densenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.1000</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}