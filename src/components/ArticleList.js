import Article from "./Article";

const ArticleList = ({ postArr }) => {
    const postsArticle = postArr.map(obj => <Article key={obj.id} title={obj.title} date={obj.date} preview={obj.preview} min={obj.minutes}/>)
    return (
        <main>
            {postsArticle}
        </main>
    )
}

export default ArticleList;