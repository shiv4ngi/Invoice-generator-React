import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  // const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    serialNum: "",
    itemName: "",
    quantity: "",
    rate: "",
    amount: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      serialNum: "",
      itemName: "",
      quantity: "",
      rate: "",
      amount: "",
    });
    event.preventDefault();
  }

  // function expand() {
  //   setExpanded(true);
  // }

  return (
    <div>
      <form className="create-note">
        <>
          <tr>
            <td>
              <input
                name="serialNum"
                onChange={handleChange}
                value={note.serialNum}
                placeholder="amount"
              />
            </td>
            <td>
              <input
                name="itemName"
                onChange={handleChange}
                value={note.itemName}
                placeholder="amount"
              />
            </td>
            <td>
              <input
                name="quantity"
                onChange={handleChange}
                value={note.quantity}
                placeholder="amount"
              />
            </td>
            <td>
              <input
                name="rate"
                onChange={handleChange}
                value={note.rate}
                placeholder="amount"
              />
            </td>
            <td>
              <input
                name="amount"
                onChange={handleChange}
                value={note.amount}
                placeholder="amount"
              />
            </td>
          </tr>
        </>
      </form>
    </div>
  );
}

export default CreateArea;
