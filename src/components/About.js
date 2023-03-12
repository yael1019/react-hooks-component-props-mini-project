
const About = ({image = "https://via.placeholder.com/215", abt}) => {
    // console.log(image, abt)
    return(
        <aside>
            <img src={ image } alt="blog logo"></img>
            <p>{ abt }</p>
        </aside>
    )
}

export default About;