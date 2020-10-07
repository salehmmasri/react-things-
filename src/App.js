import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listThings: [
        {
          id: 1,
          name: "bmw",
          type: "car"
        },
        {
          id: 2,
          name: "ferari",
          type: "car"
        },
        {
          id: 3,
          name: "samsung",
          type: "phone"
        }
      ],
    };
  }
  render() {

    return (
      <>
        <div className='App'>
          <Header thingsCount={this.state.listThings.length} />
          <ListOfAllThings thing={this.state.listThings} thingCreateed={things => this.addNewThing(things)}/>
          < Footer text={'@copy right'} />
        </div>
      </>
    )
  }
  addNewThing(data){
    let allNewThing=this.state.listThings
    allNewThing.push({id:this.state.listThings.length+1,name:data.name,type:data.type})
    this.setState({
      listThings: allNewThing
  });
  }
}



class AnyThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: ""
    };
    this.handelChange = this.handelChange.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this);


  }

  // Fix Render
  render() {
    return (<>
      <form onSubmit={this.handelSubmit}>
        <label>
          Name
        <input type="text" placeholder="name" id='name' onChange={this.handelChange}></input>
        <input type="text" placeholder="type" id='type' onChange={this.handelChange}></input>
        <input type='submit'></input>
        </label>
      </form>
    </>)
  }

  handelChange(event) {
    var name1=document.getElementById('name')
    var type=document.getElementById('type')

    let newType = type.value;
    let newName = name1.value;
    
    console.log(newType)
    // console.log(event.target.value)
    this.setState({
      name: newName,
      type:newType
    });
  }
  handelSubmit(event) {
    event.preventDefault();
    // alert(this.state.name);
    this.props.onThingCreate(this.state);
  }
  

}
function ListOfAllThings(props) {
  return (<>
    <ul>
      {props.thing.map(data => <Things item={data} key={data.id} />)}
    </ul>
    <AnyThing onThingCreate={(data)=>props.thingCreateed(data)}/>

  </>);
}

function Things(props) {
  return <li>Name :{props.item.name} Type: {props.item.type} </li>;
}

function Header(props) {
  return (
    <>
      <h1>Store of Things</h1>
      <h2>All Things {props.thingsCount}</h2>
    </>
  )
}

function Footer(props) {
  return (
    <>
      <h1>{props.text} </h1>
    </>
  )
}


export default App;
