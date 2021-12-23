import React, { PureComponent } from 'react'
//PureComponent: khi truyền vào index thì ko bị render lại dùng cho những thẻ html cứng cố định
export default class PureChild extends PureComponent {
    render() {
        return (
            <div>
                <h3>PureChild</h3>
            </div>
        )
    }
}
