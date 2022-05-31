import React, {Component} from "react"

class BtnCellRenderer extends Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
     this.props.clicked(this.props.value);
    }
    render() {
      return (
        <div>
        <button className = "btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#UpdateModal">수정</button>
        </div>
      )
    }
  }

  export default BtnCellRenderer;