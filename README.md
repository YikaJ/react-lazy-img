# React-Lazy-Img
React组件——图片懒加载

---

description
---

图片懒加载，通过判断浏览器滚动位置来决定图片是否加载。

使用方法
---

如果为了组件封装性，每个图片都监听滚动条位置再来决定是否加载，显然会有性能问题。所以类似事件委托的特性，在外部组件监听相关位置信息，再通过 props 传入内部。

```js
import React, {Component} from 'react'
import LazyImg from 'react-lazy-img'

class App extends Component {
  constructor() {
    super()
    this.state = {
      scrollTop: 0
    }
  }

  componentDidMount() {
    // 外部监听滚动条位置
    document.onscroll = () => {
      this.setState({
        scrollTop: document.body.scrollTop
      })
    }
    window.onresize = () => {
      this.setState({
        scrollTop: document.body.scrollTop
      })
    }
  }

  render() {
    return <div>
      <LazyImg
        scrollTop={this.state.scrollTop}
        className="img"
        src={src}
        loadingSrc={loadingSrc}
        onLoad={()=>console.log('loaded')}
     />
    </div>
  }
}
```
