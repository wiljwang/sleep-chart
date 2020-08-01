export default (props) => {
  var milliseconds = parseInt(props, 10);
  var hours = Math.floor(milliseconds / 3600000);
  var minutes = Math.floor((milliseconds - hours * 3600000) / 60000);
  return hours + "hr " + minutes + "min";
};
