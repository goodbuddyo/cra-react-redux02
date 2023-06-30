import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import {loadTopics,saveTopic} from "../../redux/actions/topicActions";
import {loadAuthors} from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import TopicForm from "./TopicForm";
import {newTopic} from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

function ManageTopicPage({
  topics,
  authors,
  loadAuthors,
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

    if(authors.length===0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed"+error);
      });
    }
  },[props.topic]);

  function handleChange(event) {
    const {name,value}=event.target;
    setTopic(prevTopic => ({
      ...prevTopic,
      [name]: name==="authorId"? parseInt(value,10):value
    }));
  }

  function formIsValid() {
    const {title,authorId,category}=topic;
    const errors={};

    if(!title) errors.title="Title is required.";
    if(!authorId) errors.author="Author is required";
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

  return authors.length===0||topics.length===0? (
    <Spinner />
  ):(
    <TopicForm
      topic={topic}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageTopicPage.propTypes={
  topic: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  loadTopics: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
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
    authors: state.authors
  };
}

const mapDispatchToProps={
  loadTopics,
  loadAuthors,
  saveTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTopicPage);
