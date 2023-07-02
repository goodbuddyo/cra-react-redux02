import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const TopicList=({topics,onDeleteClick}) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Priority</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {topics.map(topic => {
        return (
          <tr key={topic.id}>

            <td>
              <Link to={"/topic/"+topic.slug}>{topic.title}</Link>
            </td>
            <td>{topic.authorName}</td>
            <td>{topic.category}</td>
            <td>
              <button
                className="btn btn-outline-danger "
                onClick={() => onDeleteClick(topic)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TopicList.propTypes={
  topics: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default TopicList;
