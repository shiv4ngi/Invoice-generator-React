import Address from "./Address";
import "./Form.css";
import { ImageUpload } from "./ImageUpload";
import InvoiceNum from "./InvoiceNum";
import DatePick from "./DatePick";
import CreateArea from "./CreateArea";
import { useState } from "react";

function Form() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="invoice-box">
      <table cellPadding="0" cellSpacing="0">
        <tr className="top">
          <td colSpan="2">
            <table>
              <tr>
                <td>
                  <ImageUpload />
                </td>

                <td className="td">
                  <InvoiceNum />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr className="information">
          <td colSpan="2">
            <table>
              <tr>
                <td>
                  <Address />
                </td>

                <td className="td">
                  <Address />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tbody>
          <tr className="heading">
            <td className="td">Invoice Date</td>
            <td className="td">Due Date</td>
          </tr>

          <tr className="details">
            <td>
              <DatePick />
            </td>

            <td className="td">
              <DatePick />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="heading">
        <tr>
          <th>Serial no.</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
        <tr className="item">
          <td>1</td>
          <td>Website design</td>
          <td>2</td>
          <td>150</td>
          <td>$300.00</td>
        </tr>

        <tr className="item">
          <td>2</td>
          <td>Hosting (3 months)</td>
          <td>1</td>
          <td>75</td>
          <td>$75.00</td>
        </tr>

        <tr className="item">
          <td>3</td>
          <td>Domain name (1 year)</td>
          <td>1</td>
          <td>10</td>
          <td>$10.00</td>
        </tr>

        <tr className="total td">
          <td></td>

          <td>Total: $385.00</td>
        </tr>
      </table>
    </div>
  );
}

export default Form;
