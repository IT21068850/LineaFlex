import logo from "../assets/MasLogo.png";
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 2rem',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: 'rgba(50, 50, 50, 0.8)',  // Darker gray with opacity
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',  // Stronger shadow for better depth
                color: '#f5f5f5',  // Light text color for contrast
                fontFamily: "'Arial', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.05rem',
            }}>
                {/* Logo */}
                <div style={{ flexShrink: 0 }}>
                    <img src={logo} alt="logo" style={{ width: '6rem' }} />
                </div>

                {/* Navbar Items */}
                <div style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '2rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                }}>
                    {/* Dropdown - Project Scope */}
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
                            fontSize: 'inherit',
                            transition: 'color 0.3s ease',
                            padding: '0.5rem 1rem',
                            position: 'relative',
                        }}>
                            Project Scope
                        </button>

                        {/* Dropdown Menu */}
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: '100%',
                            marginTop: '0.5rem',
                            display: isDropdownOpen ? 'block' : 'none',
                            backgroundColor: '#333',  // Dark dropdown background
                            color: '#f5f5f5',
                            padding: '0.5rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                            width: '12rem',
                            zIndex: 1000,
                            borderRadius: '0.25rem',
                        }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li><a href="#LiteratureSurvey" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Literature Survey</a></li>
                                <li><a href="#ResearchGap" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Research Gap</a></li>
                                <li><a href="#ResearchProblem" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Research Problem & Solution</a></li>
                                <li><a href="#ResearchObjectives" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Research Objectives</a></li>
                                <li><a href="#Methodology" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Methodology</a></li>
                                <li><a href="#Technologies" style={{
                                    display: 'block',
                                    padding: '0.75rem 1rem',
                                    textDecoration: 'none',
                                    color: '#f5f5f5',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    borderRadius: '0.25rem',
                                }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    Technologies</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Other Navbar Items */}
                    <a href="#Timeline" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'color 0.3s, text-shadow 0.3s',
                        padding: '0.5rem 1rem',
                    }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffda79'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                        Milestones
                    </a>
                    <a href="#DocumentGrid" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'color 0.3s, text-shadow 0.3s',
                        padding: '0.5rem 1rem',
                    }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffda79'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                        Documents
                    </a>
                    <a href="#TeamSection" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'color 0.3s, text-shadow 0.3s',
                        padding: '0.5rem 1rem',
                    }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffda79'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                        About Us
                    </a>
                    <a href="#Contact" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'color 0.3s, text-shadow 0.3s',
                        padding: '0.5rem 1rem',
                    }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffda79'}
                       onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                        Contact Us
                    </a>
                </div>
            </nav>

            {/* Spacer to avoid content overlap */}
            <div style={{ height: '6rem' }}></div>
        </>
    );
};

export default Navbar;
