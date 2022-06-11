import React from 'react';

const FancyButton =
    React.forwardRef((props, ref) => (
    <button ref={ref} {...props} className="FancyButton">
        {props.children}
    </button>
));
//export default FancyButton;
// // You can now get a ref directly to the DOM button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <WrappedComponent ref={forwardedRef} {...rest} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}
// Rather than exporting FancyButton, we export LogProps.
// It will render a FancyButton though.
export default logProps(FancyButton);