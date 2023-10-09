import React from "react"

export const openModel = (id, setModel) => {
    setModel((pre)=> ({
        ...pre,
        [id]: true
    }))
}

export const closeModel = (id, setModel) => {
    setModel((pre)=> ({
        ...pre,
        [id]: false
    }))
}

export const openModel_JS = (id) => {
    const model = document.getElementById(id);
    if(model && model.style) {
        model.style.display = "block";
    } 
}

export const closeModel_JS = (id) => {
    const model = document.getElementById(id);
    if(model && model.style) {
        model.style.display = "none";
    }
}