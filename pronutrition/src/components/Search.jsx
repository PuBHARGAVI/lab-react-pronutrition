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
    setSwitchNameHandler=() =>{
        //  console.log("clicked ");
        const ct=document.getElementById("count").value;
        alert("Number of counts: "+ct);
        alert("Calories: "+this.props.calories);
        }
    render() {
        return (
        <div> 
            <h1 align="left" id="h1">Search</h1>
           <form><input type="text" className="form" placeholder="Find a food" onChange={this.filterList}/>
            </form>
            {this.state.items.map(item=>{
                return (<div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img className="foodpic" src={item.img} alt={item.img} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{item.name}</strong> <br />
                        <small>{item.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field-has-addons">
                      <div className="control">
                        <input className="input" id="count" type="number" min="1" max="10"/>
                      </div>
                      <div className="control">
                        <button className="button-is-info" onClick={this.setSwitchNameHandler}> +</button>
                      </div>
                    </div>
                  </div>
                </article>
                </div>);
            })}
        </div>
        );
    }
    }


