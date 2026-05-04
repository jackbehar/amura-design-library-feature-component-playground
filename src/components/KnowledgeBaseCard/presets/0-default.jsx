import * as React from 'react';
import KnowledgeBaseCard from '../KnowledgeBaseCard';

export default (
  <KnowledgeBaseCard
    heading={{ snippet: 'How do I reset my password?' }}
    description={{ snippet: 'Use the account settings page and choose Security > Change password.' }}
    tenant={{ snippet: 'Help center' }}
    postId="kb-demo-1"
    onSubmit={() => {}}
    uxpId="knowledge-base-card-default"
  />
);
