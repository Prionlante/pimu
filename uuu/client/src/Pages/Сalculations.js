import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

export default class Сalculations extends Component {
    
    constructor(){

        super();

        this.state = {

            selectedFile:'',
            data:{
                norms: [],
                kids: []
            },
            fileUpload: '',
            secret: '',
            opened: false,
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSecretChange = this.handleSecretChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.norms = this.norms.bind(this)
        this.submit = this.submit.bind(this)
        this.getAll = this.getAll.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.getSingle = this.getSingle.bind(this)
    }


    handleInputChange(event) {

        this.setState({

            selectedFile: event.target.files[0],

          })

    }

    handleSecretChange(event) {

        this.setState({

            secret: event.target.value,

          })

    }

    handleValueChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
          })
    }

    submitHandler(event)  {
        event.preventDefault();
        console.log(this.state.secret)
        if(this.state.secret === 'secretkey'){
            this.setState({opened:true})
        }
      }


    submit(){

        const data = new FormData() 

        data.append('file', this.state.selectedFile)

        let url = "https://physiology.herokuapp.com/api/excel/upload";


        axios.post(url, data, { // receive two parameter endpoint url ,form data 
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
        })

        .then(res => { // then print response status

            this.setState({fileUpload: res.data.message})
            console.log(res);

        })

        .catch(res => { // then print response status
            this.setState({fileUpload: res.data.message})
            console.log(res);

        })



    }

    getSingle(){
        console.log("ss")
        let url = "https://physiology.herokuapp.com/api/excel/single";

        axios.post( url, {
            "lmom": this.state.lmom, 
            "lmo": this.state.lmo,
            "dta": this.state.dta, 
            "mta": this.state.mta,
            "ogka": this.state.ogka,
            "gela": this.state.gela,
            "sada": this.state.sada,
            "dada": this.state.dada,
            "hss": this.state.hss,
            "hdd": this.state.hdd,
            "soma": this.state.soma,
            "kdp": this.state.kdp,
            "kdl": this.state.kdl
        } ).then(res => {
            console.log(res)
            // if(!res.data.error)
            //     this.setState({
            //         ...res.data
            //     })
        })
    }

    norms() {
        let url = "https://physiology.herokuapp.com/api/excel/norms";

        console.log("norms")
        axios.get(url, { // receive two parameter endpoint url ,form data 
        }).then(res => {
            console.log(res)
            let data = {
                norms: res.data,
                kids: []
            }
            this.setState({data: data})
        }).catch(res => console.error(res))
    }

    getAll() {
        let url = "https://physiology.herokuapp.com/api/excel/kids";
        axios.get(url, { // receive two parameter endpoint url ,form data 
        }).then(res => {
            console.log(res)
            let data = {
                norms: [],
                kids: res.data
            }
            this.setState({data: data})
        }).catch(res => console.error(res))
    }


    render(){
        console.log(this.state)
        return(

            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                {this.state.opened ? <><div className="row">

                    <div>
                      <label>
                            <input type="text" name="name" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="surname" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="fsaf" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="kekw" onChange={this.handleValueChange}/>
                        </label>  
                    </div>
                    <div>
                      <label>
                            <input type="text" name="name" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="surname" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="fsaf" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="kekw" onChange={this.handleValueChange}/>
                        </label>  
                    </div>
                    <div>
                        <label>
                            <input type="text" name="name" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="surname" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="fsaf" onChange={this.handleValueChange}/>
                        </label>
                        <label>
                            <input type="text" name="kekw" onChange={this.handleValueChange}/>
                        </label>  
                    </div>

                    <div>
                        <label>
                            <input type="text" name="kekw" onChange={this.handleValueChange}/>
                        </label>  
                    </div>
                    <button type="submit" onClick={this.getSingle}>Submit</button>
                            
                </div></> : 
                <>
                <form onSubmit={this.submitHandler} align="center">
                    <h5>Введите секретный ключ</h5>
                    <input
                        type='text'
                        onChange={this.handleSecretChange}
                    />
                    <input
                        type='submit'
                    />
                    </form>
                </>
                }
                

            </div>

        )  

    }

}
