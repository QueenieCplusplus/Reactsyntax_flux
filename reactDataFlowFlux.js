// 2020.7/09, am8:55
// node -> class -> value
// this.props.children | this.state | to be accessor of val
// props is for global, status is for class(as component)
// getInitialState() & setState() | to access updateVal by calling this.setState()

// Let's do a Dropdown Component
// this is ES5 not ES6

var React = require('react');
// var ReactDom = require('react-dom');

var KsDropDown = React.createClass({

    getInitialState: function(){

        return {

            showLists: false
        };

    },

    render: function(){

        var lists;

        //if true, then show list of the dropdown
        if (this.state.showLists) {

            lists = <photolists></photolists>

        }

        return(

            <div className="ksdropdown">
                
                   <button className="ksdropdown" onClick={this.changeListener} </button>
            
                
            </div>

        );

    },

    changeListener: function(){

        this.setState(

            {showLists: true}

        );

    }

});
