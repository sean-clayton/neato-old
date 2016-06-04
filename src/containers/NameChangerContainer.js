import { connect } from 'react-redux'
import NameChanger from 'components/NameChanger'
import { updateName } from 'actions/name'

const mapActionCreators = {
  updateName
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, mapActionCreators)(NameChanger)
