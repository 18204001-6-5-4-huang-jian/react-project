import React from 'react'
import { Button } from 'antd'
class Hierachy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'hierarchy',
            list: [
                { name: 'A' },
                { name: 'B' }
            ],
            num:1
        }
    }
    componentDidMount() {
        //console.log(this.props.match.url);
    }
    render() {
        const listTab = this.state.list.map((item, index) => {
            return <Button key={index} type="primary" style={{ margin: '10px' }}>{item.name}</Button>
        })

        return (
            <div className='hierachy-container'>
                <div style={{ fontSize: '22px', color: 'red' }}>{this.state.text}</div>
                {this.state.num === 1?listTab:<Button  type="primary" style={{ margin: '10px' }}>点我</Button>}
            </div >
        )
    }
}
export default Hierachy