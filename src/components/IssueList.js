import * as React from 'react';
import Issue from './Issue';

const IssueList = ({
  issues,
  onIssueComplete,
  onEditToggle,
  onIssueAdd,
  onIssueRemove,
  onIssueStarToggle,
}) => (
  <div>
    {issues.map((issue, i) => (
      <Issue
        key={i}
        issue={issue}
        onIssueComplete={onIssueComplete}
        onEditToggle={onEditToggle}
        onIssueAdd={onIssueAdd}
        onIssueRemove={onIssueRemove}
        onIssueStarToggle={onIssueStarToggle}
      />
    ))}
  </div>
);

export default IssueList;
