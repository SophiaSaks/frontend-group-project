"use client";

import { useState } from "react";
import "./Navbar.css";

const navLinks = [
    { label: "Böcker", href: "/explore", icon: "📖" },
    { label: "Diskussion", href: "/messages", icon: "🗨️" }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="/" className="navbar__logo">
                book<span>_</span>club
            </a>

            <div className="navbar__search">
                <input
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                />
            </div>

            <button
                className="navbar__toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div
                className={`navbar__links ${
                    menuOpen ? "navbar__links--open" : ""
                }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="navbar__link"
                        onClick={() => setMenuOpen(false)}
                    >
            <span className="navbar__icon" aria-hidden="true">
              {link.icon}
            </span>
                        <span>{link.label}</span>
                    </a>
                ))}

                <button className="navbar__create">
                    + Create post
                </button>
            </div>

            <button className="navbar__avatar" aria-label="Your profile">
                A
            </button>
        </nav>
    );
}