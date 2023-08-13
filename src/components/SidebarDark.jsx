import React from "react";
import './styles.scss'

const SidebarDark = () => {
  const sidebaroptions = [
    {
      name: "Feature",
    },
    {
      name: "Price",
    },
    {
      name: "Tech",
    },
    {
      name: "Story",
    },
    {
      name: "Journal",
    },
    {
      name: "Docs",
    },
    {
      name: "Terms",
    },
    {
      name: "Demo",
    },
    {
      name: "F.A.Q",
    },
    {
      name: "Tracking",
    },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}
        {sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}{sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}{sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}{sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}{sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}{sidebaroptions.map((option) => (
          <li>{option.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDark;
