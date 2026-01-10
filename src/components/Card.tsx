import type { CardProps } from "../types/car";

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
