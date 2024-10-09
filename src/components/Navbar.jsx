import logo from "../assets/MasLogo.png";
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 2rem',
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 1000,
            marginBottom: '2rem',
            backgroundColor: 'transparent',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Optional: Add a subtle shadow for better visibility
        }}>
            <div style={{ flexShrink: 0 }}>
                <img src={logo} alt="logo" style={{ width: '6rem' }} />
            </div>
            <div style={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '1.125rem',
                color: 'red',
                fontWeight: 'bold',
            }}>
                <div 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button style={{
                        border: 'none',
                        background: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: 'inherit'
                    }}>
                        Project Scope
                    </button>
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '100%',
                        marginTop: '0.5rem',
                        display: isDropdownOpen ? 'block' : 'none',
                        backgroundColor: '#fff',
                        color: '#000',
                        padding: '0.5rem',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        width: '12rem',
                        zIndex: 1000
                    }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="#LiteratureSurvey" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Literature Survey</a></li>
                            <li><a href="#ResearchGap" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Research Gap</a></li>
                            <li><a href="#ResearchProblem" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Research Problem & Solution</a></li>
                            <li><a href="#ResearchObjectives" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Research Objectives</a></li>
                            <li><a href="#Methodology" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Methodology</a></li>
                            <li><a href="#Technologies" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'inherit', transition: 'background-color 0.3s' }}>Technologies</a></li>
                        </ul>
                    </div>
                </div>
                <a href="#Timeline" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    position: 'relative',
                    transition: 'color 0.3s, text-shadow 0.3s'
                }}>Timeline in Brief</a>
                <a href="#DocumentGrid" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    position: 'relative',
                    transition: 'color 0.3s, text-shadow 0.3s'
                }}>Documents</a>
                <a href="#Contact" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    position: 'relative',
                    transition: 'color 0.3s, text-shadow 0.3s'
                }}>Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;
