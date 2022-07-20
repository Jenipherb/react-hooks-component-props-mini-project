import Article from "./Article"

function ArticleList({ blogposts }){
    console.log (blogposts)
    const articles = blogposts.map((blogposts) => (
      <Article 
        title={blogposts.title}
        date={blogposts.date}
        default={blogposts.default}
        value={blogposts.value}
        preview={blogposts.preview}
        />


    ))
    return(
        <main>{articles}</main>
    )
}


export default ArticleList