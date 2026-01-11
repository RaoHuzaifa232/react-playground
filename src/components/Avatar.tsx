import type { Car } from "../types/car";

interface AvatarProps {
  car: Car;
  size?: number;
}

export function Avatar({ car, size = 0 }: AvatarProps) {
  return (
    <img
      className="rounded-2xl shadow-lg shadow-indigo-500/20 ring-2 ring-white/20 object-cover hover:scale-110 hover:shadow-2xl hover:ring-indigo-400 transition-all duration-300 ease-out cursor-pointer"
      src={car.image}
      alt={car.model}
      width={size}
      style={{ aspectRatio: '3/2', height: 'auto' }}
    />
  );
}

export function AvatarWithoutDestructing(props: { car: Car; size: number }) {
  return (
    <img
      className="rounded-2xl shadow-lg shadow-indigo-500/20 ring-2 ring-white/20 object-cover hover:scale-110 hover:shadow-2xl hover:ring-indigo-400 transition-all duration-300 ease-out cursor-pointer"
      src={props.car.image}
      alt={props.car.model}
      width={props.size}
      style={{ aspectRatio: '3/2', height: 'auto' }}
    />
  );
}
