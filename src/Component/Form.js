import React from "react";
//Controlled vs Uncontrolled Component - 10-07-2023
export default class Form extends React.Component{
    state = {
        title: 'JavaScript',
        text: 'JavaScript is awesome',
        library: 'React',
        isAwesome: true,
    }

    handleChange = (e) =>{
        console.log(e.target.type);
        if(e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        }
        else if(e.target.type === 'textarea'){
            this.setState({
                text: e.target.value,
            });
        }
        else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value,
            });
        }
        else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome: e.target.checked,
            });
        }
        else{
            console.log('No valid block entered');
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('Show all: ', this.state);
    }

    render() {
        let {title, text, library, isAwesome} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder="Enter your name"
                           value={title}
                           onChange={this.handleChange}
                    />
                    <br/><br/>
                    <textarea name='text'
                              value={text}
                              onChange={this.handleChange}>
                    </textarea>
                    <br/><br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Angular'>Angular</option>
                    </select>
                    <br/> <br/>
                    <input type='checkbox' checked={isAwesome} onChange={this.handleChange}
                    />
                    <br/> <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}