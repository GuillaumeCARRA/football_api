import React from 'react';
import './navBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__menu">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <a
                                href="/"
                                className="navbar__link"
                            >
                                Ligue 1
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/d1feminine"
                                className="navbar__link"
                            >
                               D1 Féminine 
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/premierleague"
                                className="navbar__link"
                            >
                                Premier League
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/bundesliga"
                                className="navbar__link"
                            >
                               Bundesliga
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/laliga"
                                className="navbar__link"
                            >
                               La Liga
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/seriea"
                                className="navbar__link"
                            >
                              Serie A
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a
                                href="/primeiraliga"
                                className="navbar__link"
                            >
                               Primeira Liga
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
