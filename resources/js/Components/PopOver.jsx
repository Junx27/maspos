function PopOver({ children, handleClose, actionButton }) {
    return (
        <div className="relative">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="absolute bottom-0 bg-white w-full rounded-t-xl p-5">
                    {actionButton && (
                        <div className="flex justify-end" onClick={handleClose}>
                            <div className="relative -mt-[80px] w-12 h-12 p-4 bg-white rounded-full">
                                <img src="/assets/close.png" alt="" />
                            </div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PopOver;
