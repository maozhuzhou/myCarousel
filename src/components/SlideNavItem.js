
function SlideNavItem({ isCurrent, ...props }) {
    //console.log(isCurrent)
    //console.dir(props)
    return (
        <li className="SlideNavItem">
            <button  {...props} aria-current={isCurrent}>
                <span />
            </button>
        </li>
    );
}

export default SlideNavItem;