import React from 'react';

export default () => {
    return (
        <footer id="footer">
        <div className="container">
            <ul className="links">
            <li>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/lmcjt37/curated-tv-and-film"
                >
                <span>Repository</span>
                </a>
            </li>
            <li>|</li>
            <li>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/lmcjt37/curated-tv-and-film/graphs/contributors"
                >
                <span>Contributors</span>
                </a>
            </li>
            </ul>
            <p className="version">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.REACT_APP_BUILD_URL}
            >
                build {process.env.REACT_APP_BUILD || "debug"}
            </a>
            </p>
        </div>
        </footer>
    )
}