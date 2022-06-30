import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyWord] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyWord(event.target.value);
    }

    return (
    <div className="Dictionary">
            <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
}