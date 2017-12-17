import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const DropDownUi = ({ label, options, selected, handleChange }) => {
  const renderSelectMenuItems = () => {
    return options.map((value, index) => {
      return <MenuItem key={index} value={index + 1} primaryText={value} />;
    });
  };

  return (
    <SelectField
      floatingLabelText={label}
      value={selected}
      onChange={handleChange}
    >
      {renderSelectMenuItems()}
    </SelectField>
  );
};

export default DropDownUi;
