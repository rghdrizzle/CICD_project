import React, {Component} from "react"

class StoreBtnCellRenderer extends Component {
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
          <button className = "btn btn-outline-dark btn-sm" type="button" data-toggle="modal" data-target=".StoreModal">조회</button>
        </div>
        
      )
    }
  }

  export default StoreBtnCellRenderer;