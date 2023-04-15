import React, { useEffect } from "react";

const setTitle = title => {
    const element1 = document.querySelector('title');
    const element2 = document.querySelector("meta[property='og:title']");
    const element3 = document.querySelector("meta[name='twitter:title']");

    element1.innerText = title;
    element2.setAttribute('content', title);
    element3.setAttribute('content', title);
};

const setDescription = description => {
    const element1 = document.querySelector("meta[name='description']");
    const element2 = document.querySelector("meta[property='og:description']");
    const element3 = document.querySelector("meta[name='twitter:description']");

    element1.setAttribute('content', description);
    element2.setAttribute('content', description);
    element3.setAttribute('content', description);
};

export default function Metadata({ title, description, children }) {
    useEffect(() => {
        setTitle(title);
        setDescription(description);
    });

    return (
        <div>
            {children}
        </div>
    )
}