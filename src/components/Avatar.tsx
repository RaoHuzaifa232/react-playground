import { Car } from "../types/car";

interface AvatarProps {
  car: Car;
  size?: number;
}

export function Avatar({ car, size = 0 }: AvatarProps) {
  return (
    <img
      className="rounded-lg shadow-md object-cover hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
      src={car.image}
      alt={car.model}
      width={size}
      height={size}
    />
  );
}

export function AvatarWithoutDestructing(props: { car: Car; size: number }) {
  return (
    <img
      className="rounded-lg shadow-md object-cover hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
      src={props.car.image}
      alt={props.car.model}
      width={props.size}
      height={props.size}
    />
  );
}
