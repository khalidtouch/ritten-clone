import React, { Component } from 'react'

export class TextField extends Component {
    render() {
        const params = this.props
        const rows = params.height || 1
        return params.isRequired ? (
            <div>
                <textarea placeholder={params.placeholder} value={params.value} onChange={params.onChange} rows={rows} required>
                </textarea>
            </div>
        ) : (
            <div>
                <textarea placeholder={params.placeholder} value={params.value} onChange={params.onChange} rows={rows}>
                </textarea>
            </div>
        )
    }

}