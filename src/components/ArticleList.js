import Article from "./Article";

const ArticleList = ({ posts }) => {
    const postsArticle = posts.map(obj => <Article key={obj.id} title={obj.title} date={obj.date} preview={obj.preview} minutes={obj.minutes}/>)
    return (
        <main>
            {postsArticle}
        </main>
    )
}

export default ArticleList;