import { Component, ReactNode } from "react";
import './search-box.styles.css'

class SearchBox extends Component <any, any>{
render(): ReactNode {
    return(
        <input placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} type={this.props.type} className={`seach-box ${this.props.className}`}>
    )
}
}

export default SearchBox;