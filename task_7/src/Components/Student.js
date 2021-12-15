import React from 'react';
import ListOfStudent  from './ListOfStudent';
import Navbar  from './Navbar';

function Student()
{
    return (
        <div> 
           
            <ListOfStudent sl="1" name="moni" id="19-40000-1" cgpa="3.50"  semester="9" crdt="133"/>
            <ListOfStudent sl="2" name="manisha" id="19-40001-1" cgpa="3.61" semester="8"  crdt="98"/>
        </div>
    )
}
export default Student;