import React from 'react'
import LocationItem from './LocationItem'

type Location = {
  id: number;
  name: string;
  address: string;
  stations: number;
  avgWaitTime: string;
  active: boolean;
  image: string;
  rating: number;
}

type LocationListProps = {
  locations: Location[];
  selectedItems: number[];
  handleItemSelectChange: (id: number) => void;
}

const LocationList = ({ locations, selectedItems, handleItemSelectChange }: LocationListProps) => {
  return (
      <div className="space-y-4">
          {locations.map(location => (
              <LocationItem
                  key={location.id}
                  id={location.id}
                  name={location.name}
                  address={location.address}
                  stations={location.stations}
                  avgWaitTime={location.avgWaitTime}
                  active={location.active}
                  image={location.image}
                  rating={location.rating}
                  selected={selectedItems.includes(location.id)}
                  handleItemSelectChange={handleItemSelectChange}
              />
          ))}
      </div>
  );
};

export default LocationList
