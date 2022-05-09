import {landingData} from '../../data/landingData'
import DirectoryItem from '../directoryItem'

const Directory = () =>{

    
    return(
        <div className="directory">
            {landingData.map((data, index) => (
                <DirectoryItem item={data} key={index}/>
            ))}
        </div>
    )
}

export default Directory