import React from 'react';
import { Row } from 'react-bootstrap';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Row>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} herf="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Row>
  );
};

export default Pagination;
