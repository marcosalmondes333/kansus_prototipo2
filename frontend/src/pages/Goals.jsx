import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import { useState } from "react";

export default function Goals() {
  const [goals, setGoals] = useState([
    { name: "Economizar 20L de água", progress: 70 },
    { name: "Reciclar 5 itens", progress: 40 },
  ]);

  function addGoal() {
    const name = prompt("Digite a nova meta:");
    if (!name) return;

    setGoals([...goals, { name, progress: 0 }]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Metas Sustentáveis</h1>

      {goals.map((g, index) => (
        <Card key={index} title={g.name}>
          <ProgressBar progress={g.progress} />
        </Card>
      ))}

      <Button text="Criar nova meta" onClick={addGoal} />
    </div>
  );
}
