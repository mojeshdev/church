import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { House, Images, EqualApproximately, CircleUserRound } from "lucide-react";

const GlassNav = () => {
  const navItems = [
    { to: "/", label: "Home", icon: House, color: "silver" },
    { to: "/gallery", label: "Gallery", icon: Images, color: "gold" },
    { to: "/about", label: "About", icon: EqualApproximately, color: "platinum" },
    { to: "/contact", label: "Contact", icon: CircleUserRound, color: "silver" }

  ];

  const location = useLocation();
  const activeIndex = navItems.findIndex((item) => item.to === location.pathname);

  const [longPressIndex, setLongPressIndex] = useState(null);

  const handleMouseDown = (index) => setLongPressIndex(index);
  const handleMouseUp = () => setLongPressIndex(null);
  const handleMouseLeave = () => setLongPressIndex(null);

  return (
    <StyledWrapper>
      <div className="glass-radio-group">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`nav-item ${activeIndex === index ? "active" : ""}`}
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseDown(index)}
              onTouchEnd={handleMouseUp}
              title={item.label}
            >
              <Icon size={22} />
              <span className={longPressIndex === index ? "show-text" : ""}>
                {item.label}
              </span>
            </NavLink>
          );
        })}

        <div
          className="glass-glider"
          style={{
            width: `calc(100% / ${navItems.length})`,
            transform: `translateX(${activeIndex * 100}%)`,
            background:
              navItems[activeIndex]?.color === "silver"
                ? "linear-gradient(135deg, #c0c0c055, #e0e0e0)"
                : navItems[activeIndex]?.color === "gold"
                ? "linear-gradient(135deg, #ffd70055, #ffcc00)"
                : "linear-gradient(135deg, #d0e7ff55, #a0d8ff)",
            boxShadow:
              navItems[activeIndex]?.color === "silver"
                ? "0 0 18px rgba(192,192,192,0.5),0 0 10px rgba(255,255,255,0.4) inset"
                : navItems[activeIndex]?.color === "gold"
                ? "0 0 18px rgba(255,215,0,0.5),0 0 10px rgba(255,235,150,0.4) inset"
                : "0 0 18px rgba(160,216,255,0.5),0 0 10px rgba(200,240,255,0.4) inset",
          }}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  .glass-radio-group {
    display: flex;
    position: relative;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
  }

  .nav-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-weight: 600;
    color: #e5e5e5;
    z-index: 2;
    gap: 0.5rem;
    position: relative;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .nav-item span {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 1;
  }

  .nav-item span.show-text {
    opacity: 1;
  }

  .nav-item:hover {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 1rem;
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.37,1.95,0.66,0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    .nav-item span {
      opacity: 0;
      position: absolute;
      left: 20%;
      transform: translateY(-50%);
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.3);
      padding: 0.2rem 0.5rem;
      border-radius: 0.5rem;
      color: #fff;
      font-size: 12px;
      pointer-events: none;
    }
    .nav-item span.show-text {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export default GlassNav;
