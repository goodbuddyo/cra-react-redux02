import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import {loadTopics,saveTopic} from "../../redux/actions/topicActions";
import {loadPriorities} from "../../redux/actions/priorityActions";
import PropTypes from "prop-types";
import TopicForm from "./TopicForm";
import {newTopic} from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

function ManageTopicPage({
  topics,
  priorities,
  loadPriorities,
  loadTopics,
  saveTopic,
  history,
  ...props
}) {
  const [topic,setTopic]=useState({...props.topic});
  const [errors,setErrors]=useState({});
  const [saving,setSaving]=useState(false);

  useEffect(() => {
    if(topics.length===0) {
      loadTopics().catch(error => {
        alert("Loading topics failed"+error);
      });
    } else {
      setTopic({...props.topic});
    }

    if(priorities.length===0) {
      loadPriorities().catch(error => {
        alert("Loading priorities failed"+error);
      });
    }
  },[props.topic]);

  function handleChange(event) {
    const {name,value}=event.target;
    setTopic(prevTopic => ({
      ...prevTopic,
      [name]: name==="priorityLevel"? parseInt(value,10):value
    }));
  }

  function formIsValid() {
    const {title,priorityLevel,category}=topic;
    const errors={};

    if(!title) errors.title="Title is required.";
    if(!priorityLevel) errors.priority="Priority is required";
    if(!category) errors.category="Category is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length===0;
  }

  function handleSave(event) {
    event.preventDefault();
    if(!formIsValid()) return;
    setSaving(true);
    saveTopic(topic)
      .then(() => {
        toast.success("Topic saved.");
        history.push("/topics");
      })
      .catch(error => {
        setSaving(false);
        setErrors({onSave: error.message});
      });
  }

  return priorities.length===0||topics.length===0? (
    <Spinner />
  ):(
    <TopicForm
      topic={topic}
      errors={errors}
      priorities={priorities}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageTopicPage.propTypes={
  topic: PropTypes.object.isRequired,
  priorities: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loadTopics: PropTypes.func.isRequired,
  loadPriorities: PropTypes.func.isRequired,
  saveTopic: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getTopicBySlug(topics,slug) {
  return topics.find(topic => topic.slug===slug)||null;
}

function mapStateToProps(state,ownProps) {
  const slug=ownProps.match.params.slug;
  const topic=
    slug&&state.topics.length>0
      ? getTopicBySlug(state.topics,slug)
      :newTopic;
  return {
    topic,
    topics: state.topics,
    priorities: state.priorities
  };
}

const mapDispatchToProps={
  loadTopics,
  loadPriorities,
  saveTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTopicPage);
