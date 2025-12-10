import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <Card title="Resumo Diário">
        <p><strong>Água economizada:</strong> 3.2 Litros</p>
        <ProgressBar progress={65} />

        <p style={{ marginTop: "15px" }}>
          <strong>Metas concluídas hoje:</strong> 2/5
        </p>
        <ProgressBar progress={40} />
      </Card>

      <Card title="Metas Ativas">
        <p>Economizar água – 70%</p>
        <ProgressBar progress={70} />

        <p style={{ marginTop: "15px" }}>Reciclar 5 itens – 40%</p>
        <ProgressBar progress={40} />
      </Card>

      <Card title="Sugestões do dia">
        <li>Reduzir tempo no banho (-5 min)</li>
        <li>Reaproveitar água da lavagem</li>
        <li>Levar lixo reciclável ao ponto de coleta</li>
      </Card>
    </div>
  );
}
