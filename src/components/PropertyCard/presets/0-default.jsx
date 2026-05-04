import * as React from 'react';
import PropertyCard from '../PropertyCard';

export default (
  <PropertyCard
    id="metric"
    headerTitle="Profile score"
    tooltipText="Score reflects recent activity."
    rangeHeader="0 – 10"
    onRangeChange={() => {}}
    defaultRangeValue={4}
    profileProgress={[{ metric: 0.65, progreesColor: '#0096C7' }]}
    uxpId="property-card-default"
  />
);
