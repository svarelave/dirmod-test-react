import React from 'react';
interface InputProps {
    source?: string | undefined;
    classContainer?: string | "";
    label?: string | "";
    width?: number;
    height?: number;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

class Image extends React.Component<any> {
	
	render() {
		const { source, hasFile, label, 
			onClick, classContainer, width, height } = this.props;
		return (
			<div className={`image-component ${classContainer}`} onClick={onClick}>
				<img 
					alt={label ? label : ''} 
					src={ `${source}${!hasFile ? `?${Date.now()}` : ''}` }
					width={width}
					height={height}
				/>
				<label className="form-check-label" htmlFor={ `checkbox-${ label?.replace(' ','') }` }> 
					{ label }
				</label>
			</div>			
		)
	}
}

export default Image;