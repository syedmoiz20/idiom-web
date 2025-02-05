import { useParams } from "react-router-dom";

export const Chapter = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Chapter {id}</h2>
    </div>
  );
};
