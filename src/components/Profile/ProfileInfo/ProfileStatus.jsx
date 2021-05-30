import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Hi!'
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
        this.state.editMode = true;
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.state.editMode = true;
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus