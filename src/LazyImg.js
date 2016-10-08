import React, {Component, PropTypes} from 'react'

class LazyImg extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false
    }

    this.checkCanLoad.bind(this)
  }

  checkCanLoad() {
    const clientHeight = window.innerHeight || document.documentElement.clientHeight
    const documentScrollTop = this.props.scrollTop || document.body.scrollTop
    const imgOffsetTop = this.refs.img.offsetTop
    const imgHeight = this.refs.img.height
    const isLoaded = this.state.isLoaded
    console.log(documentScrollTop);
    // load condiction
    const condiction = !isLoaded &&
      ((imgOffsetTop - documentScrollTop) < clientHeight) &&
      ((documentScrollTop - imgOffsetTop)) <= imgHeight

    if(condiction) {
      this.setState({
        isLoaded: true
      })
    }
  }

  componentDidMount() {
    this.checkCanLoad()
  }

  componentWillReceiveProps() {
    if(!this.state.isLoaded) {
      this.checkCanLoad()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.isLoaded) return false
    if(!nextState.isLoaded && nextProps.scrollTop === this.props.scrollTop) return false

    return true
  }

  render() {
    const {src, className, loadingSrc, alt, onLoad} = this.props
    const {isLoaded} = this.state
    if(isLoaded) {
      return <img src={src} alt={alt} ref="img" className={className} onLoad={onLoad}/>
    } else {
      return <img src={loadingSrc} alt={alt} ref="img" className={className}/>
    }
  }
}

LazyImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  loadingSrc: PropTypes.string,
  onLoad: PropTypes.func,
  scrollTop: PropTypes.number
}

export default LazyImg
