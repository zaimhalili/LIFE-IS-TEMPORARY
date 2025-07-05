
function ProgressBar() {
    return (
        <>
            <div className="progress">
                <p className="progress-text">Progress Today <div className="fraction">0/3</div></p>
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
            </div>

        </>
    )
}

export default ProgressBar