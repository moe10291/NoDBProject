import React, {Component} from 'react';
import './Quotes.css';
import axios from 'axios';



class Quotes extends Component {
    constructor() {
        super();

        this.state = {
            quotesArray: [],
            quoteInput:"",
            editInput: "",
            editToggle: false
        };

         this.deleteQuotes = this.deleteQuotes.bind(this)
         this.handleEditInput = this.handleEditInput.bind(this)
         this.handleEditClick = this.handleEditClick.bind(this)
        
    }
    componentDidMount() {
        axios.get('/api/viewquotes')
            .then(res => {
                this.setState({
                    quotesArray: res.data
                })
            })
    }

    handleEditClick(id) {
        this.state.editToggle
            ? this.handleSave(id)
            : this.setState({ editToggle: true })
    }
    handleSave(id) {
        this.editQuotes(id)
        this.setState({ editToggle: false })
    }

    handleQuoteInput(e){
        this.setState({quoteInput: e.target.value})
    }
    handleEditInput(e) {
        this.setState({ editInput: e.target.value })
    }

    submitQuote(){
        axios.post('/api/addquotes', {quote: this.state.quoteInput})
        .then(res => {
            this.setState({quotesArray: res.data})
        })
    }

    editQuotes(id){
        console.log(id)
        axios.put(`/api/editquotes/${id}`, {text: this.state.editInput})
        .then(res => {
            this.setState({quotesArray: res.data})
        })
        }
        

        deleteQuotes(id){
            console.log('id',id);
            axios.delete(`/deletequotes/${id}`)
            .then(res => {
                // console.log(res.data)
                this.setState({quotesArray: res.data})
            })
        }
    render() {
        console.log(this.state.quoteInput);
        var quotesArray = this.state.quotesArray.map((randoms) => {
            return (
                <div>
               {
                    this.state.editToggle
                        ? <input onChange={this.handleEditInput} value={this.state.editInput} />
                        : <div>- {this.props.Quotes}</div>
                }

                
           
            <p> {randoms.text} </p>
            
            <button class="Edit" onClick={()=>this.handleEditClick(randoms.id)}>
            {this.state.editToggle ? 'Save' : 'Edit'} 
            </button>
            
            <button class= "Delete" onClick={()=>this.deleteQuotes(randoms.id)}>Delete </button>
            </div>)
        })


        return ( 
            <div>    

            {/* <img class="Heading"style = {{
        width: '500px',
        height: '200px'
      }} src={image} alt="pic"/>          */}

        {/* <img class="Phil" stlye= {{
            width: '100px',
            height: '200px'
        }}  src={image2} alt="picture" /> */}

                {quotesArray} 

                <input onChange={(e)=>this.handleQuoteInput(e)} />

                <button class="Add" onClick={()=> this.submitQuote()}>Add Quote</button>

            </div>
        )
    }

}

export default Quotes;