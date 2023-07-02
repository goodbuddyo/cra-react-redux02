import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const TopicForm=({
  topic,
  priorities,
  onSave,
  onChange,
  saving=false,
  errors={}
}) => {
  return (
    <section className="mybody-section topics-body">
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
          name="priorityLevel"
          label="Priority"
          value={topic.priorityLevel||""}
          defaultOption="Select Priority"
          options={priorities.map(author => ({
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

        <button type="submit" disabled={saving} className="btn  btn-mybutton">
          {saving? "Saving...":"Save"}
        </button>
      </form>
    </section>
  );
};

TopicForm.propTypes={
  priorities: PropTypes.array.isRequired,
  topic: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TopicForm;
