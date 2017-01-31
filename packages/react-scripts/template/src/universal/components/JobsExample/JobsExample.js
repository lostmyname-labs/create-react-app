import React, { PropTypes } from 'react';
import { withPosts } from '../../models/posts';

var JobsTest = ({ job }) => (
  <div>
    <p>Example 1</p>
    {job.result
      ? job.result.map(post => (
        <div key={post.id}>{post.title}</div>
      ))
      : 'Job not yet resolved'
    }
  </div>
);

JobsTest.propTypes = {
  job: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    result: PropTypes.any,
    error: PropTypes.any
  })
};

export default withPosts(JobsTest);
