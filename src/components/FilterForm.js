import * as React from 'react';
import TextField from 'material-ui/TextField';

const FilterForm = ({ text, onTextUpdate }) => (
  <div className="row">
    <TextField
      floatingLabelText="Search for issue"
      fullWidth={true}
      value={text}
      onChange={e => {
        onTextUpdate(e.currentTarget.value);
      }}
    />
  </div>
);

export default FilterForm;
