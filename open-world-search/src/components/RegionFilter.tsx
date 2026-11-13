// Dropdown filter
interface RegionFilterProps {
    selectedRegion: string;
    onRegionChange: (region: string) => void;
}

export default function RegionFilter({ selectedRegion, onRegionChange }: RegionFilterProps) {
    return (
        <select id='filter-region' 
                value={selectedRegion}
                onChange={(e) => onRegionChange(e.target.value)}
        >
            <option value=''>All Regions</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
            
            
        </select>

    )
}