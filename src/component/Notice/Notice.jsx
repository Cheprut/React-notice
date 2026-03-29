import "./Notice.css";

function Notice({ title, text, date, tag }) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("ru-RU")
    : "";

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">Title: {title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">Data: {formattedDate}</div>
        <div className="journal-item__text">Text: {text}</div>
        <div className="journal-item__tag">Tags: {tag}</div>
      </div>
    </div>
  );
}

export default Notice;
