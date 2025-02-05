import React from "react";

const Pagination = ({ page, setPage }) => (
    <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
);

export default Pagination;
