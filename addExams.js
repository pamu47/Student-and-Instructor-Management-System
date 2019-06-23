import React, {Component} from 'react'
import Axios from 'axios';


class addExams extends Component {

    constructor(){
        super()
        this.state = {
            subject : '',
            title : '',
            instructions : '',
            start : '',
            end : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        // let files = e.target.files;
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
    }

    onSubmit(e){
        e.preventDefault()
        const examData = {
            subject : this.state.subject,
            title : this.state.title,
            instructions : this.state.instructions,
            start : this.state.start,
            end : this.state.end
        }
        Axios.post('http://localhost:5000/exam/add', examData)
            .then(data=>{
                console.log('exam added')
                this.props.history.push(`/examList`)
            })
    }



    render() {
       return (

           <div className="container">
               <div className="row">
                   <div className="col-md-6 mt-5 mx-auto bg bg-light">
                       <form noValidate onSubmit={this.onSubmit}>
                           <h1 className="h3 mb-3 font-weight-normal text-center"><img src="https://cdn2.iconfinder.com/data/icons/education-4-1/256/School_Test-512.png" width="100" height="100"/> New Exam</h1>
                           <div className="form-group">
                               <label htmlFor="subject">Subject</label>
                               <input type="text" onChange={this.onChange}
                                      className="form-control"
                                      name="subject"
                                      placeholder="Enter Subject"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="title">Title</label>
                               <input type="text" onChange={this.onChange}
                                      className="form-control"
                                      name="title"
                                      placeholder="Enter Title"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="instructions">Instructions</label>
                           <input type="text" onChange={this.onChange}
                                  className="form-control"
                                  name="instructions"
                                  placeholder="Enter Instructions"
                           />
                        </div>
                           <div className="form-group">
                               <label htmlFor="start">Starting Time:</label>
                               <input
                                   type='time' onChange={this.onChange}
                                   name='start'
                                   className="form-input"
                               />
                           </div>
                           <div className="form-group">
                                   <label htmlFor="start">Ending Time:</label>
                                   <input
                                       type='time' onChange={this.onChange}
                                       name='end'
                                       className="form-input"
                                   />
                           </div>
                           <div className="form-group">
                               <label>Choose file:</label>
                               <input type="file" name="file"  className="form-input"/>
                           </div>

                           <div className="form-group">
                           <button type="submit" className="btn btn-lg btn-block btn-primary">
                               CREATE EXAM
                           </button>
                           </div>

                       </form>
                   </div>
               </div>
           </div>


       );
   }
}



export default addExams
