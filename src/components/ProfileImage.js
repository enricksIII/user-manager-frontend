import React from 'react';

class ProfileImage extends React.Component {
	render() {
		return <div className="profileImg">{this.props.children}</div>;
	}
}

export default ProfileImage;
