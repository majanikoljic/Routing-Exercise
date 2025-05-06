import { useParams } from "react-router-dom"
import { data } from './data.js'
import NavigateBackButton from "./NavigateBackButton";

function ContentPage() {
  const { type, id } = useParams();
  const object = data[type]?.find(item => item.id === id);

  if (!object) return <p>Object not found!</p>;

  return (
    <div className="content-page">
      <h2>{object.title}</h2>
      <p>{object.content}</p>
      <NavigateBackButton />
    </div>
  );
}

export default ContentPage;
