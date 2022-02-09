import React, { Component } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimension: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      showMobileNav: false,
    };

    this.setDimension = this.setDimension.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.setDimension);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setDimension);
  }

  setDimension() {
    this.setState({
      dimension: { width: window.innerWidth, height: window.innerHeight },
    });
  }

  closeMobileMenu() {
    this.setState({ showMobileNav: false });
  }

  openMobileMenu() {
    this.setState({ showMobileNav: true });
  }

  toggleMobileMenu() {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  }

  render() {
    const { menus } = this.props;
    const { showMobileNav, dimension } = this.state;

    if (dimension.width < 800) {
      return (
        <MobileNav
          menus={menus}
          showMobileNav={showMobileNav}
          onCloseMenuClick={this.closeMobileMenu}
        />
      );
    }

    return <DesktopNav menus={menus} />;
  }
}

export default MainNav;

const menus = [
  {
    text: "Education",
    href: "#",
    subMenus: [
      {
        text: "Academic Programmes",
        href: "#",
        subMenus: [
          {
            text: "Undergraduate",
            href: "#",
            subMenus: null,
          },
          {
            text: "Ph.D",
            href: "#",
            subMenus: null,
          },
        ],
      },
      {
        text: "Departments/Centers",
        href: "#",
        subMenus: [
          { text: "CSE", href: "#", subMenus: null },
          { text: "EEE", href: "#", subMenus: null },
          { text: "EIE", href: "#", subMenus: null },
          { text: "Mech", href: "#", subMenus: null },
          { text: "IT", href: "#", subMenus: null },
        ],
      },
      {
        text: "Curriculam & Syllabus",
        href: "#",
        subMenus: [
          { text: "B.Tech", href: "#", subMenus: null },
          { text: "M.Tech", href: "#", subMenus: null },
          { text: "MCA", href: "#", subMenus: null },
          { text: "MSc", href: "#", subMenus: null },
        ],
      },
      {
        text: "Academics Services",
        href: "#",
        subMenus: [
          { text: "Time Table", href: "#", subMenus: null },
          { text: "Fees", href: "#", subMenus: null },
          { text: "Scholarship", href: "#", subMenus: null },
          { text: "Orientation", href: "#", subMenus: null },
          { text: "Programmes", href: "#", subMenus: null },
        ],
      },
    ],
  },
  {
    text: "Research",
    href: "#",
    subMenus: [
      {
        text: "Research Facilities",
        href: "#",
        subMenus: null,
      },
      {
        text: "MoUs",
        href: "#",
        subMenus: null,
      },
      {
        text: "IPRs",
        href: "#",
        subMenus: null,
      },
      {
        text: "Publications",
        href: "#",
        subMenus: null,
      },
    ],
  },
  {
    text: "Innovation",
    href: "#",
    subMenus: [
      {
        text: "Institute Entrepreneurship And Development Cell (IEDC)",
        href: "#",
        subMenus: null,
      },
      {
        text: "AIC-PECF",
        href: "#",
        subMenus: null,
      },
      {
        text: "Industrial Consultancy Services",
        href: "#",
        subMenus: null,
      },
    ],
  },
  {
    text: "Admissions",
    href: "#",
    subMenus: [
      {
        text: "Undergraduate",
        href: "#",
        subMenus: null,
      },
      {
        text: "Postgraduate",
        href: "#",
        subMenus: null,
      },
      {
        text: "Ph.D",
        href: "#",
        subMenus: null,
      },
    ],
  },
  {
    text: "About ptu",
    href: "#",
    subMenus: [
      {
        text: "Overview",
        href: "#",
        subMenus: [
          {
            text: "Visions",
            href: "#",
            subMenus: null,
          },
          {
            text: "Mission",
            href: "#",
            subMenus: null,
          },
          {
            text: "Administration",
            href: "#",
            subMenus: null,
          },
        ],
      },
      {
        text: "Acts & Statues",
        href: "#",
        subMenus: null,
      },
      {
        text: "Vital Statistics • NIRF rankings",
        href: "#",
        subMenus: null,
      },
      {
        text: "IQAC",
        href: "#",
        subMenus: null,
      },
      {
        text: "Campus Life",
        href: "#",
        subMenus: [
          { text: "Healthcare", href: "#", subMenus: null },
          { text: "Hostels", href: "#", subMenus: null },
          { text: "Sports", href: "#", subMenus: null },
          { text: "Clubs", href: "#", subMenus: null },
          { text: "Women's Forum", href: "#", subMenus: null },
          { text: "Student Activities", href: "#", subMenus: null },
          { text: "Campus Amenities", href: "#", subMenus: null },
          { text: "Campus Publications", href: "#", subMenus: null },
        ],
      },
    ],
  },
];

export function MainNavContainer({ navRef }) {
  return <MainNav menus={menus} ref={navRef} />;
}
