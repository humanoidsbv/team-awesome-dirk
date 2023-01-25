/* eslint-disable @next/next/no-img-element */
export const Header = () => {

    const handleClick = () => {
        console.log('click')
    }

    return (
<header>
        <a href="#" className="logo">team awesome</a>
        <button onClick={handleClick} className="mob-nav-toggle" aria-controls="main-nav" aria-expanded="false">
            <div className="menu-btn__burger"></div>
        </button>
        
        <nav id="main-nav" aria-label="Main" data-visible="false">
            <ul className="menu-items">
                <li>
                    <a className="menu-item" href="#">Timesheets</a>
                </li>
                <li>
                    <a className="menu-item" href="#">Team members</a>
                </li>
                <li>
                    <a className="menu-item" href="#">Projects</a>
                </li>
                <li>
                    <a className="menu-item" href="#">Clients</a>
                </li>
                <li>
                    <a className="menu-item" href="#">Documents</a>
                </li>
            </ul>
        </nav>

        <div className="user_dropdown">
            <div className="user">
                <img className="humanoids-logo-s" src="img/1_humanoids_logo 1.png" alt="humanoids logo"/>
                <img className="profile-pic-s" src="img/amijs.png" alt="profile picture" />
        </div>
            {/* <Arrow /> */}
        </div>
    </header>
    )
}
