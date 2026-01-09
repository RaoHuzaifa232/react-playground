import { Card } from "./Card";

export function CardExample() {
  return (
    <div className="space-y-4">
      <Card title="About BMW">
        <p>BMW M5 is a high-performance luxury sedan known for its power and precision.</p>
      </Card>
      
      <Card title="Features">
        <ul className="list-disc ml-5">
          <li>Twin-turbo engine</li>
          <li>Advanced suspension</li>
          <li>Luxury interior</li>
        </ul>
      </Card>
    </div>
  );
}
