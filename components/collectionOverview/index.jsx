import CollectionData from '../../data/shopData';
import Collection from '../collection';

const CollectionOverview = () =>{
    
    return(
        <div>
            {
                CollectionData.map((collection, index)=>(
                    <Collection item={collection} key={index}/>
                ))
            }
        </div>
    )
}

export default CollectionOverview;