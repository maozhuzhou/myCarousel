import React, {useEffect, useRef} from "react";

function Slide(props) {
    const { isCurrent, takeFocus, image, id, title, children } = props;
    //console.dir(props)
    let ref = useRef();

    useEffect(
        () => {
            if (isCurrent && takeFocus) {
                ref.current.focus();
            }
        },
        [isCurrent, takeFocus]
    );

    return (
        <li
            ref={ref}
            aria-hidden={!isCurrent}
            tabIndex="-1"
            aria-labelledby={id}
            className="Slide"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="SlideContent">
                <h2 id={id}>{title}</h2>
                {children}
            </div>
        </li>
    );
}

export default Slide;