import classes from "./Account.module.css";
import { useState, useEffect } from "react";
import React from "react";
import Web3 from "web3";
import Card from "../UI/Card/Card";
import ContractBtns from "../ContractButton/ConntactButton";
import { parse } from "path";

const AccountForm = () => {
    const [name, setName] = useState([]);
    const [input, setInput] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [walletAccount, setWalletAccount] = useState("");
    const [addressData, setAddress] = useState([]);
    console.log("this is state", addressData);
    const [nextAddr, setNextAddr] = useState("");
    const [accountBalance, setBalance] = useState(0);
    const [currentAddr, setCurrentAddr] = useState("");

    useEffect(() => {
        const addr = addressData.concat();
        console.log("current value", addr);
    }, [addressData]);


    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log("Event: Form Submit");
    };
    const handleInput = () => {
        const tempData = name;
        tempData.push(input);
        setName(name);
        setInput("");
        //name.concat(input);
    };
    const createAccount = () => {
        const web3 = new Web3(
            new Web3.providers.HttpProvider("http://127.0.0.1:8545")
        );
        const walletAccount = web3.eth.accounts.create();
        addressData.push = walletAccount.address;
        const testData = walletAccount.privateKey;

        setAddress((addressData) => addressData.concat(walletAccount.address));
    };

    return ( <
        Card > {
            showForm ? ( <
                Card >
                <
                form onSubmit = {
                    () => {
                        handleSubmit();
                    }
                }
                className = { classes.form } >
                <
                input value = { input }
                className = { classes.input }
                type = "text"
                placeholder = "Account Name"
                onChange = {
                    (e) => setInput(e.target.value) } >
                < /input>{" "} <
                button className = { classes.buttonCreate }
                type = "button"
                //onSubmit={handleSubmit}
                onClick = {
                    () => {
                        createAccount();
                        handleInput();
                        setShowForm(false);
                        //getBalance();
                    }
                }
                onChange = {
                    (e) => setCurrentAddr(e.target.addressData) } >
                Create <
                /button> <
                /form> <
                /Card>
            ) : ( <
                div >
                <
                div >
                <
                div > {
                    name.map((name, index) => {
                        return ( <
                            Card key = { index } > { /* */ } <
                            div >
                            <
                            p > Account Name: { name } < /p> <
                            ContractBtns / >
                            <
                            p > Address < /p> <
                            p > { addressData[index] } < /p> <
                            /div> <
                            /Card>
                        );
                    })
                } <
                /div> <
                /div> <
                Card >
                <
                button className = { classes.button }
                onClick = {
                    () => setShowForm(true) } >
                Create Bank Accounts <
                /button> <
                /Card> <
                /div>
            )
        } <
        /Card>
    );
};
export default AccountForm;