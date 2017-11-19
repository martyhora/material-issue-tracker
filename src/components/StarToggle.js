import * as React from 'react';
import StarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import styles from '../styles';
import { yellowColor } from '../styles/colors';

const StarToggle = ({ toggled, onToggle }) => (
  <div>
    {toggled ? (
      <StarIcon
        style={{ ...styles.icon, color: yellowColor }}
        onClick={onToggle}
      />
    ) : (
      <StarBorderIcon style={styles.icon} onClick={onToggle} />
    )}
  </div>
);

export default StarToggle;
