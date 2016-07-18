import { connect } from 'react-redux'
import Counter from 'components/Counter'
import { increase } from 'actions/counter'

const mapActionCreators = {
  increase
}

const mapStateToProps = state => ({ count: state.count })

export default connect(mapStateToProps, mapActionCreators)(Counter)
