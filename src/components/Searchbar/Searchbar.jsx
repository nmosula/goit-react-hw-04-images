import { Component } from "react";
import { Header, Searchform, Searchformbutton,Searchformbuttonlabel, Searchforminput } from './Searchbar.styled';


class Searchbar extends Component {
    state = {
        searchQuery: "",
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ searchQuery: value });   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.searchQuery);
        this.setState({ searchQuery: "" });
    }

    render () {
        return (
            <Header>
            <Searchform onSubmit={this.handleSubmit}>
                <Searchformbutton>
                <Searchformbuttonlabel>Search</Searchformbuttonlabel>
                </Searchformbutton>

                <Searchforminput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchQuery}
                    onChange = {this.handleChange}
                />
            </Searchform>
            </Header>
        );
    }
}

export default Searchbar;