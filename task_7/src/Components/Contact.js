import react,{Component} from 'react';
import Navbar  from './Navbar';

class ShowContact extends Component
{
    constructor()
    {
        super()
        this.state={
            Name:"AIUB",
            Department:"Faculty of Engineering",
            Hotline:"01710938489"
            
        }
    }
    ChangeDeptDetails()
    {
        this.setState({
            Name:"AIUB",
            Department:"Faculty of Arts and Social Sciences",
            Hotline:"01916388489"
            
        });
    }
    render(){
        return (
            <div>
              
               
              <h3>{this.state.Name} <br/>
              {this.state.Department}<br/>
              {this.state.Hotline}</h3>
            <button onClick={()=>this.ChangeDeptDetails()}>New Department Details</button>
            </div>
   
        )
    }
    

}
export default ShowContact;