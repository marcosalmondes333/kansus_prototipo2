import Card from "../components/Card";
import XPBar from "../components/XPBar";
import Badge from "../components/Badge";

export default function Gamification() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Gamificação</h1>

      <XPBar xp={120} max={200} />

      <Card title="Conquistas Recentes">
        <Badge label="Primeiro Passo" />
        <Badge label="Economia de Água" />
        <Badge label="Reciclagem" />
      </Card>

      <Card title="Histórico de XP">
        <ul>
          <li>Separou lixo reciclável (+5 XP)</li>
          <li>Economizou 20 litros de água (+12 XP)</li>
          <li>Usou transporte público (+7 XP)</li>
        </ul>
      </Card>
    </div>
  );
}
