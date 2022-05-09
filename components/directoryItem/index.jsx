import Link from "next/link"

const DirectoryItem = ({item})=>{
    console.log(222,item)
    const {title, imageUrl, size} = item
    return(
        <div className={`${size} directory-item`}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default DirectoryItem