import { useState, useEffect } from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [list, setList] = useState([]);

  const deletItem = (index) => {
    const newList = list.filter((item) => {
      return item.id !== index;
    });
    setList(newList);
    toast.info("item deleted!");
  };

  const editItem = (index) => {
    const ObjectItem = list.filter((item) => {
      return item.id === index;
    });
    if (ObjectItem[0].completed) {
      ObjectItem[0].completed = false;
    } else {
      ObjectItem[0].completed = true;
    }
    setList([...list]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form setList={setList} list={list} />
      <ItemsList list={list} deletItem={deletItem} editItem={editItem} />
    </section>
  );
};
export default App;
