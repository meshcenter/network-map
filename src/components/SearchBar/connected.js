import { connect } from "react-redux";
import PureSearchBar from "./component";

const mapStateToProps = (state, ownProps) => ({
	nodes: state.nodes,
	tickets: state.tickets
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PureSearchBar);