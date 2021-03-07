/* Component-wrapper for the citylist part of the page */

import CityListTitle from "./cityList-components/CityListTitle"
import CityList from "./cityList-components/CityList"

const CityListBox = ({ cityList }) => {
    return (
        <div>
            <CityListTitle />
            <CityList cityList={cityList}/>
        </div>
    )
}

export default CityListBox
