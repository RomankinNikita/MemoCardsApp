import { useState } from "react";
import "./Card.css";
import cn from "../../utils/cn";

type CardProps = {
  front?: string;
  back?: string;
  className?: string;
};

export default function Card(props: CardProps) {
  const { front, back = front, className } = props;
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip((prev) => !prev);
  };

  return (
    <div
      className={cn(className, "card-container", { flip })}
      onClick={handleFlip}
    >
      <div className="card">
        <div className="card-side card-front">{front}</div>
        <div className="card-side card-back">{back}</div>
      </div>
    </div>
  );
}
