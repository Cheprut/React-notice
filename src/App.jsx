import "./App.css";
import Body from "./component/Body/Body";
import Form from "./component/Form/Form";
import Leftpanel from "./component/Leftpanel/Leftpanel";
import Logo from "./component/Logo/Logo";
import Noticelist from "./component/Noticelist/Noticelist";
import { useLocalStorage } from "./hooks/use-localstorage.hooks";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useLocalStorage("notes");
  const [selectedItem, setSelectedItem] = useState(null);
  const addnotes = (item) => {
    if (!item.id) {
      setNotes([
        ...notes,
        {
          ...item,
          id: notes.length > 0 ? Math.max(...notes.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      setNotes(
        notes.map((i) => {
          if (i.id === item.id) {
            return { ...item };
          }
          return i;
        }),
      );
    }
  };

  const deleteNotice = (id) => {
    setNotes(notes.filter((i) => i.id !== id));
  };
  return (
    <>
      <div className="app">
        <Leftpanel>
          <Logo />
          <Noticelist notes={notes} setItem={setSelectedItem} />
        </Leftpanel>
        <Body>
          <Form
            data={selectedItem}
            addnotesstorage={addnotes}
            onDelete={deleteNotice}
          />
        </Body>
      </div>
    </>
  );
}

export default App;
