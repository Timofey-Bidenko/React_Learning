
function Header({username}) {
    return(<header>
        <div class="logo">PIZZA DAY</div>
        <input type="text" class="search-bar" placeholder="Search for the order #"/>
        <div class="username">{username ? username.toUpperCase() : "USERNAME"}</div>
    </header>)
}

export default Header