import { useState, useEffect } from "react";
import React from "react";
import Web3 from "web3";
import classes from "./ContractButton.css";
import Card from "../UI/Card/Card";
import swal from "sweetalert";
const ContractBtns = (props) => {
  const [name, setName] = useState();
  const [amount, setAmout] = useState();
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = (e) => {
    e.prevenDefault();
    console.log("Event: Form Submit");
  };
  const deposit = () => {
    swal({
      title: "confirmation",
      text: "Are You Sure?",
      content: "input",
      buttons: {
        cancel: true,
        confirm: "Submit",
      },
    }).then((val) => {
      if (val) {
        swal({
          title: "Thanks!",
          text: "You typed: " + val,
          icon: "success",
        });
      }
    });
  };
  const withdraw = () => {
    swal({
      title: "Deposit!!",
      text: "Are You Sure?",
      content: "input",
      buttons: {
        cancel: true,
        confirm: "Submit",
      },
    }).then((val) => {
      if (val) {
        swal({
          title: "Thanks!",
          text: "You typed: " + val,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {showForm ? (
        <Card>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
            className="form"
          >
            <input
              value={input}
              className="input"
              type="text"
              placeholder="Name"
              onChange={(e) => setInput(e.target.value)}
            ></input>{" "}
            <input className="input" type="text" placeholder="Amout"></input>
            <button
              className="buttonTransac"
              type="button"
              //onSubmit={handleSubmit}
              onClick={() => {
                setShowForm(false);
              }}
            >
              transac
            </button>
          </form>
        </Card>
      ) : (
        // old form
        <div>
          <button
            type="button"
            className="buttonDeposit"
            onClick={() => deposit()}
          >
            deposit
          </button>{" "}
          <button
            type="button"
            className="buttonWithdraw"
            onClick={() => withdraw()}
          >
            withdraw
          </button>{" "}
          <button
            type="button"
            className="buttonTransfer"
            onClick={() => setShowForm(true)}
          >
            transfer
          </button>
        </div>
      )}
    </div>
  );
};

export default ContractBtns;
