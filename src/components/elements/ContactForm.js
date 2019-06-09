import React from "react"

class ContactForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            dogBreed: '',
            subject: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateField = this.validateField.bind(this);
    }

    handleChange(event){        
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    validateField(fieldName, value){
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        
        switch(fieldName) {
            case 'name':
                nameValid = value.length > 0
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            default:
                break;
        }
    }

    handleSubmit(event){
        alert('A names was submitted ' + this.state.name);
        event.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field is-horizontal">
                    <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                        <input className="input" type="text" name="name" placeholder="Your name" onChange={this.handleChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                        <input className="input" type="email" name="email" placeholder="Your email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                    <input className="input" type="text" name="dog" placeholder="Your favorite dog breed" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-dog"></i>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                    <input className="input" name="subject" type="text" placeholder="Subject..." />
                    <span className="icon is-small is-left">
                        <i className="fas fa-pen-alt"></i>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <div className="control">
                        <textarea name="message" className="textarea" placeholder="Message..." />
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icon-left">
                    <button className="button is-success" disabled={!this.state.formValid}>
                        <span className="icon is-small">
                        <i className="fas fa-paper-plane"></i>
                        </span>
                        <span>Send Message</span>
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm