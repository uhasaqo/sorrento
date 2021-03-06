const BannerStyle = {
    minHeight: '50vh',
    minWidth: '100%',

    // position: 'relative'
}

const BannerImage = {
    display: 'block',
    position: 'absolute',
    // width: '1920px',
    width: '100%',
    height: '50vh',
    margin: '0',
    objectFit: 'cover',
    objectPosition: 'center',
    // display: 'block',
    zIndex: 9
}

const TextStyle = {
    position: "absolute",
    width: '100%',
    margin: '0',
    textAlign: 'center',
    top: '50%',
    zIndex: 99
}

export function Banner(props) {
    return (
        <div className="banner" style={BannerStyle}>
            <img src={props.image} className="banner-image" style={BannerImage} />
            <h2 className="banner-text" style={TextStyle}>{props.text}</h2>
        </div>


    )
}

export default Banner