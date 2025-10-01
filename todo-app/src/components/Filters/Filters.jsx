import FilterButton from "../FilterButton/FilterButton"

const Filters = ({filter, setFilter}) => {
    const filterButtons = [
        {
            type: "all",
            name: "Все"
        },
        {
            type: "active",
            name: "Активные"

        },
        {
            type: "completed",
            name: "Завершенные"
        } 
    ]
    
    return (
        <div className="filters">
            {filterButtons.map((button) =>(
                <FilterButton onClick={() => setFilter(button.type)} active={filter == button.type} type={button.type}>
                    {button.name}
                </FilterButton>
            ) )}
        </div>

    )
}

export default Filters