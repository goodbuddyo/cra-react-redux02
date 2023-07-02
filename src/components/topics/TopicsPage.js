import React from "react";
import {connect} from "react-redux";
import * as topicActions from "../../redux/actions/topicActions";
import * as priorityActions from "../../redux/actions/priorityActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import TopicList from "./TopicList";
import TopicsTopPar from "./TopicsTopPar";
import {Redirect} from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

class TopicsPage extends React.Component {
  state={
    redirectToAddTopicPage: false
  };

  componentDidMount() {
    const {topics,priorities,actions}=this.props;

    if(topics.length===0) {
      actions.loadTopics().catch(error => {
        alert("Loading topics failed"+error);
      });
    }

    if(priorities.length===0) {
      actions.loadPriorities().catch(error => {
        alert("Loading priorities failed"+error);
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
      <section className="mybody-section topics-body">
        {this.state.redirectToAddTopicPage&&<Redirect to="/topic" />}

        <h2>Step 1: Assess Site Data - Select a Topic & Priority</h2>

        <TopicsTopPar />



        {this.props.loading? (
          <Spinner />
        ):(
          <>
            <button
              style={{marginBottom: 0,marginRight: 10,marginTop: 10}}
              className="btn add-topic btn-mybutton"
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
      </section>
    );
  }
}

TopicsPage.propTypes={
  priorities: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    topics:
      state.priorities.length===0
        ? []
        :state.topics.map(topic => {
          return {
            ...topic,
            priorityName: state.priorities.find(a => a.id===topic.priorityLevel).name
          };
        }),
    priorities: state.priorities,
    loading: state.apiCallsInProgress>0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTopics: bindActionCreators(topicActions.loadTopics,dispatch),
      loadPriorities: bindActionCreators(priorityActions.loadPriorities,dispatch),
      deleteTopic: bindActionCreators(topicActions.deleteTopic,dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsPage);
