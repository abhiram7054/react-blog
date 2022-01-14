import { Link } from "react-router-dom"
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <Link to="/post/:postId">
            <img className="postImg"
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
            alt=""
            />
            </Link>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>

                <Link to="/post/:postId" className="link">
                    <span className="postTitle">Lorem ipsum dolor sit amet </span>
                </Link>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit quo fugit molestias quia ea aut maxime, perferendis, in doloremque quae blanditiis debitis laboriosam! Rem explicabo veniam recusandae dignissimos consectetur!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit quo fugit molestias quia ea aut maxime, perferendis, in doloremque quae blanditiis debitis laboriosam! Rem explicabo veniam recusandae dignissimos consectetur!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias odit quo fugit molestias quia ea aut maxime, perferendis, in doloremque quae blanditiis debitis laboriosam! Rem explicabo veniam recusandae dignissimos consectetur!
            </p>
        </div>
    )
}
