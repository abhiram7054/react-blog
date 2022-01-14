import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" 
                alt="" 
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Whatever we want to write
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Abhiram</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ad autem rerum similique eaque obcaecati deserunt quidem! Earum quidem, tempora, itaque aperiam fugiat consequatur, aspernatur harum necessitatibus tenetur est dignissimos.
                </p>
            </div>
        </div>
    )
}
