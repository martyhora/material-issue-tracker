import * as React from 'react';
import StarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import styles from '../styles';
import { yellow500 } from 'material-ui/styles/colors';

const StarToggle = ({ toggled, onToggle }) => (
  <div>
    {toggled ? (
      <StarIcon color={yellow500} style={styles.icon} onClick={onToggle} />
    ) : (
      <StarBorderIcon style={styles.icon} onClick={onToggle} />
    )}
  </div>
);

export default StarToggle;
