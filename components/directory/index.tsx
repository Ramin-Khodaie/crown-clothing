import {landingData} from '../../data/landingData'
import DirectoryItem from '../directoryItem'

const Directory = () =>{

console.log(877,landingData)    
    return(
        <div className="directory">
            {landingData.map((data, index) => (
                <DirectoryItem item={data} key={index}/>
            ))}
        </div>
    )
}

export default Directory