import React from 'react'
import LocationItem from './LocationItem'
import { LOCATIONS } from '../constants/constants'

type LocationListProps = {
    selected: boolean
}

const LocationList = ({selected}: LocationListProps) => {
  return (
    <div className="space-y-4">
      {LOCATIONS.map(location => (
        <LocationItem
          selected={selected}
          key={location.id}
          name={location.name}
          address={location.address}
          stations={location.stations}
          avgWaitTime={location.avgWaitTime}
          active={location.active}
          image={location.image}
          rating={location.rating}
        />
      ))}
    </div>
  )
}

export default LocationList
