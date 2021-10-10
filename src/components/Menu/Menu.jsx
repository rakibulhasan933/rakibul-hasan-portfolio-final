import './Menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#myProtfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#work">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonial">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contract">Contact</a>
                </li>
            </ul>
        </div>
    );
}