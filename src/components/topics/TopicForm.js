import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const TopicForm=({
  topic,
  authors,
  onSave,
  onChange,
  saving=false,
  errors={}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{topic.id? "Edit":"Add"} Topic</h2>
      {errors.onSave&&(
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={topic.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={topic.authorId||""}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={topic.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving? "Saving...":"Save"}
      </button>
    </form>
  );
};

TopicForm.propTypes={
  authors: PropTypes.array.isRequired,
  topic: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TopicForm;
