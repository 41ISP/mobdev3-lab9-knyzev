const FilterButton = ({type, children}) => {
    return (
        <button className={`filter-btn`} data-filter={type}>
            {children}
        </button>
    )
}

export default FilterButton