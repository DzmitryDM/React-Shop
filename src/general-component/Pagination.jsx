import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/context";

function Pagination({ totalCount }) {
	const { currentPage, pageSize, onPageCount } = useContext(ShopContext);

	const pageCount = Math.ceil(totalCount / pageSize);
	const pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	return (
		<ul className="pagination">
			{pages.map((p, index) => {
				return (
					<li
						key={index}
						className={
							currentPage === p
								? "active #512da8 deep-purple darken-2"
								: "waves-effect"
						}
						onClick={() => onPageCount(p)}
					>
						<a href="#!">{p}</a>
					</li>
				);
			})}
		</ul>
	);
}
export default Pagination;
