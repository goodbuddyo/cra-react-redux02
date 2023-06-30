import React from "react";
import {connect} from "react-redux";
import * as topicActions from "../../redux/actions/topicActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import TopicList from "./TopicList";
import {Redirect} from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

class TopicsPage extends React.Component {
  state={
    redirectToAddTopicPage: false
  };

  componentDidMount() {
    const {topics,authors,actions}=this.props;

    if(topics.length===0) {
      actions.loadTopics().catch(error => {
        alert("Loading topics failed"+error);
      });
    }

    if(authors.length===0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed"+error);
      });
    }
  }

  handleDeleteTopic=async topic => {
    toast.success("Topic deleted");
    try {
      await this.props.actions.deleteTopic(topic);
    } catch(error) {
      toast.error("Delete failed. "+error.message,{autoClose: false});
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddTopicPage&&<Redirect to="/topic" />}
        <h2>Topics</h2>
        {this.props.loading? (
          <Spinner />
        ):(
          <>
            <button
              style={{marginBottom: 20}}
              className="btn btn-primary add-topic"
              onClick={() => this.setState({redirectToAddTopicPage: true})}
            >
              Add Topic
            </button>

            <TopicList
              onDeleteClick={this.handleDeleteTopic}
              topics={this.props.topics}
            />
          </>
        )}
      </>
    );
  }
}

TopicsPage.propTypes={
  authors: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    topics:
      state.authors.length===0
        ? []
        :state.topics.map(topic => {
          return {
            ...topic,
            authorName: state.authors.find(a => a.id===topic.authorId).name
          };
        }),
    authors: state.authors,
    loading: state.apiCallsInProgress>0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTopics: bindActionCreators(topicActions.loadTopics,dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors,dispatch),
      deleteTopic: bindActionCreators(topicActions.deleteTopic,dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsPage);
