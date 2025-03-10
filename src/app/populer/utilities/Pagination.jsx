const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: "0"

        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevState) => prevState - 1)
            scrollTop()
        }
    }


    return (
        <div className="flex items-center justify-center mt-4 space-x-4">
            <button onClick={handlePrevPage} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Prev
            </button>
            <p>
                {page} of {lastPage}
            </p>
            <button onClick={handleNextPage} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Next
            </button>
        </div>
    );
};

export default Pagination;
