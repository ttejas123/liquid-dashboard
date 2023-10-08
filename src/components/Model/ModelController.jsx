import React from "react"

export const openModel = (id) => {
    const model = document.getElementById(id);
    if(model && model.style) {
        model.style.display = "block";
    }
}

export const closeModel = (id) => {
    const model = document.getElementById(id);
    if(model && model.style) {
        model.style.display = "none";
    }
}