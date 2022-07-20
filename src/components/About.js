

function About(blogData = "https://via.placeholder.com/215"){
    return(
        <div>
            <aside>
                <img src = {blogData.blogpic} alt="blog logo"/>
                <p>{blogData.blogabout}</p>
            </aside>
        </div>
    )
}

export default About