const FilterButton = ({type, children, active, onClick}) => {
    
    return (
        <button onClick={onClick} className={`filter-btn${active ? " active " : ""}`} data-filter={type}>
            {children}
        </button>
    )
}

export default FilterButton