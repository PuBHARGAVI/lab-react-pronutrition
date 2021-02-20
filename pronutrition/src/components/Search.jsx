import React, { Component } from 'react';
import './Components.css';
import Food from './Food';

export default class Search extends Component {
    state = {
        data: [],
        items: [],
        value:0
    }
    filterList = (event) => {
        let itemlist = this.state.data;
        let itemslist1=[];
        itemlist.forEach(function (arrayItem) {
        if(arrayItem.name.startsWith(event.target.value)){
            itemslist1.push(arrayItem);
        }})
        this.setState({items: itemslist1});
    };
    componentWillMount = () => {
      this.setState({
          data: this.props.content,
      })
    }
    countIncrementer=()=>{
     console.log("HI");   
    }
    dataupdate(){
        var dataarr=this.state.data
        var itemarr=this.state.items
    for(var i=0;i<dataarr.length;i++){
        for(var j=0;j<itemarr.length;j++){
            if(dataarr[i].name!==itemarr[i].name){
                dataarr[i].show=false
            }
            else{
                dataarr[i].show=true
            }
        }
    }
    }
    render() {
        return (
        <div> 
            <h1 align="left" id="h1">Search</h1>
           <form><input type="text" className="form" placeholder="Find a food" onChange={this.filterList}/>
            </form>
            {this.dataupdate()}
            <Food content={this.state.data}/>
        </div>
        );
    }
    }


