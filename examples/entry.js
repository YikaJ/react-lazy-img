import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import LazyImg from '../src/LazyImg'

const imgSrc = ["http://hbimg.b0.upaiyun.com/75798f80c5ce5f4dcccb6282cc7cb845aaf2047a74c02-ids98u_fw236", "http://hbimg.b0.upaiyun.com/cc714d726e0743e0bc9d6e8b7a8f1f28388f174e452c0-LrsRWr_fw236", "http://hbimg.b0.upaiyun.com/daa1284bb48e36413e13109c29b8b77c39db473877284-w72bbC_fw236", "http://hbimg.b0.upaiyun.com/890a9ac6a6f7f18d2066b24cd99b0b750f8714d033cc0-fHzwz4_fw236", "http://hbimg.b0.upaiyun.com/797f690c65137f2bcecd7345c441c8153d942ccb6c2a-OUTG03_fw236", "http://hbimg.b0.upaiyun.com/4ce286b1181b2877a30ce7ee1cb36803ba757c929a2eb-vKxtrX_fw236", "http://hbimg.b0.upaiyun.com/8cba5e95d9b582eea2a7b6ba0496b73155171312ef13-EqEeEm_fw236", "http://hbimg.b0.upaiyun.com/0c4ce0767b20834d1647fd91d09e8f0719acf708bcc3-GSAhPn_fw236", "http://hbimg.b0.upaiyun.com/452c2c69c9c623835fcdf752f830ff01aab954193ad784-VLAnYl_fw236", "http://hbimg.b0.upaiyun.com/cdb4e3a925c6479163de340f76c3c067e24127e08ae13-R44Uzd_fw236", "http://hbimg.b0.upaiyun.com/0bc76df20411ed3c053aff421f12dbff3674d1573a299-iuH0MC_fw236", "http://hbimg.b0.upaiyun.com/a9c9bf8ee2436346c4b40f445eacb583873564e01f144f-2rmMGt_fw236", "http://hbimg.b0.upaiyun.com/8460b8ab1111844e162b18c008009b937fe8d1bb821ca-duAdxm_fw236", "http://hbimg.b0.upaiyun.com/3b1a2b9869307c20052a6262fd9945e88dd29acd2ee37-lS7bwJ_fw236", "http://hbimg.b0.upaiyun.com/1fe1e8e891bf8bda90f301cce1eb14c8cb338b4f5327c-L4ehHp_fw236", "http://hbimg.b0.upaiyun.com/c161474e2020015d8c45e6ef117bb2344f82662b3100e-ttmmUN_fw236", "http://hbimg.b0.upaiyun.com/ff57396ac40791b55ae45633983230fafa1a2b762c8b6-vScrIg_fw236", "http://hbimg.b0.upaiyun.com/af056c1471fb6cf96ab8fffd240016744e94e143265b4-KSYHLH_fw236", "http://hbimg.b0.upaiyun.com/0253245a7904363f4f95252928446012c39c58884f5fd-eGrxqe_fw236", "http://hbimg.b0.upaiyun.com/f7fcf428996c296efca014b4a1513f035e45f2f9622a0-otiGvJ_fw236", "http://hbimg.b0.upaiyun.com/5343e1af95ada45125edf4fae3ca7808d5c12a5d2d5a1-XfnccV_fw236", "http://hbimg.b0.upaiyun.com/9c159128564c5503c2ecf3bcc57636eeecd77bf8249e2-hkO0IX_fw236", "http://hbimg.b0.upaiyun.com/6425d4d359b53681f61a77552b4eefebaefeeb3456769-exUxQh_fw236", "http://hbimg.b0.upaiyun.com/035e52cbdc497dbb6f66275046f1636315cdf42c99368-CQO29z_fw236", "http://hbimg.b0.upaiyun.com/0f8c42f33e457520b18a946e35b1d2ec600702242eb58-gtWDFI_fw236", "http://hbimg.b0.upaiyun.com/e4622e3117063642d443c6cf26f9db36d60a7b5c2047d-O9fjV4_fw236", "http://hbimg.b0.upaiyun.com/a0e363907f37918efc26d86ea0378ac9782916c940f7e-tBNpT9_fw236", "http://hbimg.b0.upaiyun.com/aea066072b9f35c27d016b5a2e78e8a8159eac204896d-Ho5IX7_fw236", "http://hbimg.b0.upaiyun.com/3f5baadde1b9dfe7dc7d8e3a5f083d5ee55ca2bf42c22-vJkx2B_fw236", "http://hbimg.b0.upaiyun.com/ae6d1f24f7e01aa1e200372eb09240d57339571e76143-pOGVlP_fw236", "http://hbimg.b0.upaiyun.com/99a28aeb3002eeb26d38ff54f4851f80e3069c34284bf-sS8vLO_fw236", "http://hbimg.b0.upaiyun.com/a06c958d301e804e844ea785a17c67d503cc8fe9335de-0e0bwK_fw236", "http://hbimg.b0.upaiyun.com/d16520145c0a3a961166204f48c0ab4b39a691bd2596b-sbh8uh_fw236", "http://hbimg.b0.upaiyun.com/84c5dc64f30a65dccf13d852e646abf833910dfd32bed-8AutcO_fw236", "http://hbimg.b0.upaiyun.com/4be2c9ebfd618b452753e15b65d4268b53d30d9833697-9hYXIC_fw236", "http://hbimg.b0.upaiyun.com/40910b8dba4e1fcf329b87affb19a844abd5d507600a5-06MWVd_fw236", "http://hbimg.b0.upaiyun.com/603098fffe18a7f5e0ffcf93620a8835deae61fcb002-cx0Ud6_fw236", "http://hbimg.b0.upaiyun.com/3bce6b95470d70486823e5576eb4a83f418f4390309fb-7JvnP6_fw236", "http://hbimg.b0.upaiyun.com/53d6dc256d84ba2a1eceba5507815221ae071de14c247-y2s9Qi_fw236", "http://hbimg.b0.upaiyun.com/9c64a78acfea8f916b654b31fb804ceb4a0355342a45e-xR86ey_fw236", "http://hbimg.b0.upaiyun.com/5fac529dbe95dac482c08fe60d76393aa60ef5c97e0b0-SWt3Bo_fw236", "http://hbimg.b0.upaiyun.com/0b2a252e8ad3165769d90c360750f5bb25719bcafcea-DCPwhD_fw236", "http://hbimg.b0.upaiyun.com/7518c4258c4a8880979829a42440ecc3aac4898c43fa1-qZ2LMF_fw236", "http://hbimg.b0.upaiyun.com/a25704c62594f049c96bb47bb9627b2110e5edb495314-7QnpVQ_fw236", "http://hbimg.b0.upaiyun.com/7b82db7f05fe7e27714c56de4ec8833559c9883dba5aa-GtsYz6_fw236", "http://hbimg.b0.upaiyun.com/4eddd32a9dd307fe79eac5c63a4626f73b684b2d31ec7-6fIB2n_fw236", "http://hbimg.b0.upaiyun.com/dadd532ee38270680d96c56dfbc6fe0b6f0494e22ce1e-82dOAN_fw236", "http://hbimg.b0.upaiyun.com/92d62b703ba112d9d2e5e3f3f0912d873c25c3ec21115-r4NRC7_fw236", "http://hbimg.b0.upaiyun.com/9a99993bf65d6c5fbf1cdc31c20d72d6b65844fa49db6-mAwxtP_fw236", "http://hbimg.b0.upaiyun.com/97bf0797a83aea4e6371426122e987e4c2eeec1a6a259-ZDJuVg_fw236", "http://hbimg.b0.upaiyun.com/37e08520e382aa8768f50f71aa91d039e9080441429fc-kyYUlr_fw236", "http://hbimg.b0.upaiyun.com/93b640e708f300c1724499767074c2f7aa6513ba2679c-XZRJt6_fw236", "http://hbimg.b0.upaiyun.com/35057c8f353c749b9638dbaa4609b71ed17efb5c5bd64-AyGT9j_fw236", "http://hbimg.b0.upaiyun.com/bd910766726349aa1270be99574aed00191b97f7342454-MKZDDa_fw236", "http://hbimg.b0.upaiyun.com/af4df05ee421d31dfe2a926deacd47b08d0476733d7ea-Hu30qV_fw236", "http://hbimg.b0.upaiyun.com/1172a323d28df80550662a843e76783950c89734e04a-hSmKcl_fw236", "http://hbimg.b0.upaiyun.com/2365ecaebfd6ba06d9e05befd41e7e1584ce35f525743-GS2iaP_fw236", "http://hbimg.b0.upaiyun.com/59beec61c9c0c548f6462e6d41ee93520b6526031ff7c-ts4Irv_fw236", "http://hbimg.b0.upaiyun.com/6e384ea6c0b42d832c02a4ae3f5cb047f321c4033a61c-S4h5Ao_fw236", "http://hbimg.b0.upaiyun.com/878becd990640ef338bbf81da2d419a4cf5ca3b18702-G6N7SC_fw236", "http://hbimg.b0.upaiyun.com/07cb041ffd83cc58239a9af2cdd38afd9f4398f92458d-mtBRme_fw236", "http://hbimg.b0.upaiyun.com/27490fceba2fd275eabcad0faa39c09c9431ce8a3e9cd-9VfSKz_fw236"]
class App extends Component {

  constructor() {
    super()

    this.state = {
      scrollTop: 0
    }
  }

  componentDidMount() {
    document.onscroll = ()=> {
      this.setState({
        scrollTop: document.body.scrollTop
      })
    }
  }

  render() {
    return (
      <ul>
        {imgSrc.map((src, i) => {
          return (
            <li key={i}>
              <LazyImg src={src}
                loadingSrc="http://dribbble.s3.amazonaws.com/users/8563/screenshots/485890/loading-icon.gif"
                alt="pic"
                className="img"
                scrollTop={this.state.scrollTop}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('_react_app'))
