import React from "react";

import "./TopLinks.css";

function TopLinks(props) {
  const { seperator, links } = props;
  return (
    <div className="quick-links__container">
      {links.map((link, index) => {
        const linkTag = (
          <a key={index} href={link.href} className="quick-links__link">
            {link.text}
          </a>
        );
        if (index !== links.length - 1) {
          return [linkTag, seperator];
        }

        return linkTag;
      })}
    </div>
  );
}

export default TopLinks;

export function TopLinksContainer() {
  return <TopLinks seperator="|" links={links} />;
}

const links = [
  {
    text: "Mail Portal",
    href: "#",
  },
  {
    text: "Examination Wing",
    href: "#",
  },
  {
    text: "Quick Links",
    href: "#",
  },
  {
    text: "Site Map",
    href: "#",
  },
  {
    text: "Alumni",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
];
