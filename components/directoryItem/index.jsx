import {useRouter} from 'next/router'
 
const DirectoryItem = ({item})=>{

    const router = useRouter()
    const {title, imageUrl, size} = item
    return(
        <div className={`${size} directory-item`} onClick={()=>router.push('/shop')}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default DirectoryItem