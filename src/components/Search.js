import React from 'react';

class Search extends React.Component {
    filterUpdate() {
        const val = this.myValue.value;
        this.props.filterUpdate(val);
    }
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		//THIS IS MY CODE
		return (
            <header>
                <form>
                    <input 
                        type="text" 
                        ref={ (value) => {this.myValue = value} }
                        placeholder="Type to filter..." 
                        onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </header>
        );


		//THIS IS THEIR CODE
		return (
			<form>
				<input type="text" placeholder="Type to Filter" />
			</form>
		);
	}
}
export default Search;
