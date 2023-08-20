import Categories from './Categories';
import Price from "./Price"

import '../styles.scss'

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
      <Categories />
      <Price />
      </div>
  );
};

export default SidebarDark;
