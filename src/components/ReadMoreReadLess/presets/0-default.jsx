import * as React from 'react';
import ReadMoreReadLess from '../ReadMoreReadLess';

const copy =
  'This is a longer block of sample copy used to demonstrate read more and read less behavior in the design system.';

export default (
  <ReadMoreReadLess charLimit={72} readMoreText="Read more" readLessText="Read less" uxpId="read-more-default">
    {copy}
  </ReadMoreReadLess>
);
