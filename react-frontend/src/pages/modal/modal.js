import './modal.css';

const Modal = (props) => {
    const {
        primaryButtonClick,
        secondaryButtonClick,
        primaryButtonName,
        secondaryButtonName,
        primaryButtonDisabled,
        children,
        className,
        ...restProps
    } = props;

    return (
        <div
            className='modal'
            {...restProps}
        >
            <div className='modal-wr'>
                {children}
                <div className='modal__button-group'>
                    {primaryButtonClick && (
                        <button
                            onClick={primaryButtonClick}
                        >
                            {primaryButtonName}
                        </button>
                    )}
                    {secondaryButtonClick && (
                        <button
                            onClick={secondaryButtonClick}
                        >
                            {secondaryButtonName}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;