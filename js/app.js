var expenses = [
        {
            "created_at": "2016-07-26 06:23:45", 
            "price": "15.00", 
            "sid": "1", 
            "title": "Bread"
        }, 
        {
            "created_at": "2016-07-26 06:23:54", 
            "price": "27.00", 
            "sid": "2", 
            "title": "Water"
        }, 
        {
            "created_at": "2016-07-26 06:44:35", 
            "price": "40.00", 
            "sid": "3", 
            "title": "Sigarettes"
        }, 
        {
            "created_at": "2016-07-27 04:29:38", 
            "price": "110.00", 
            "sid": "9", 
            "title": "Chicken"
        }, 
        {
            "created_at": "2016-07-27 04:29:50", 
            "price": "80.00", 
            "sid": "10", 
            "title": "Salad"
        }, 
        {
            "created_at": "2016-07-27 04:30:12", 
            "price": "18.00", 
            "sid": "11", 
            "title": "Bread"
        }, 
        {
            "created_at": "2016-07-31 04:29:18", 
            "price": "37.00", 
            "sid": "12", 
            "title": "Sandwich"
        }, 
        {
            "created_at": "2016-07-31 04:35:49", 
            "price": "60.00", 
            "sid": "13", 
            "title": "Chicken"
        }, 
        {
            "created_at": "2016-07-31 07:20:33", 
            "price": "60.00", 
            "sid": "14", 
            "title": "Eggs"
        }, 
        {
            "created_at": "2016-07-31 07:20:46", 
            "price": "55.00", 
            "sid": "15", 
            "title": "Kefir"
        }, 
        {
            "created_at": "2016-08-01 09:44:24", 
            "price": "122.00", 
            "sid": "16", 
            "title": "Cheese"
        }, 
        {
            "created_at": "2016-08-01 10:15:39", 
            "price": "15.00", 
            "sid": "17", 
            "title": "Zire"
        }, 
        {
            "created_at": "2016-08-01 10:15:48", 
            "price": "8.00", 
            "sid": "18", 
            "title": "Sigarettes"
        }
    ];

var Expense = React.createClass({
	render: function (argument) {
		var title = this.props.data.title;
		var price = this.props.data.price;
		var date = this.props.data.created_at;
		return (
			<div className="col-sm-4">
				<div className="expense">
				<div className="title">{title}</div>
				<div className="price">{price}</div>
				<div className="date">{date}</div>
				</div>
			</div>
		)
	}
});

var Expenses = React.createClass({
	render: function (argument) {
		var data = this.props.data;
		var template = data.map(function(item, index){
			return(
				<div key={index}>
					<Expense data={item} />
				</div>
			)
		});
		return(
			<div className="row">{template}</div>
		)
	}
});

var Add = React.createClass({
	getInitialState: function (argument) {
		return{
			btnDisabled: true,
			textIsEmpty: true,
			priceIsEmpty: true
		}
	},
	componentDidMount: function (argument) {
		ReactDOM.findDOMNode(this.refs.title).focus();
	},
	onClickHandler: function (e) {
		e.preventDefault();
		var title = ReactDOM.findDOMNode(this.refs.title).value;
		var price = ReactDOM.findDOMNode(this.refs.price).value;
		console.log(title+' = '+price);
	},
	onCheckRuleClick: function (argument) {
		this.setState({btnDisabled: !this.state.btnDisabled});
	},
	onFieldChange: function (fieldName, e) {
		if(e.target.value.trim().length > 0){
			this.setState({[''+fieldName]: false});
		}
		else{
			this.setState({[''+fieldName]: true});
		}
	},
	render: function (argument) {
		var priceIsEmpty = this.state.priceIsEmpty;
		var textIsEmpty = this.state.textIsEmpty;
		var btnDisabled = this.state.btnDisabled;
		return (
			<form>
				<div className='form-group'>
					<input type='text' defaultValue='' ref='title' onChange={this.onFieldChange.bind(this, 'textIsEmpty')} className='form-control' placeholder='Title' />
				</div>
				<div className='form-group'>
					<input type='text' defaultValue='' ref='price' onChange={this.onFieldChange.bind(this, 'priceIsEmpty')} className='form-control' placeholder='Price' />
				</div>
				<div class="checkbox">
				  <label>
				    <input type="checkbox" defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} /> Save
				  </label>
				</div>
				<button type="submit" className="btn btn-default" 
					onClick={this.onClickHandler} 
					ref='alert' 
					disabled={btnDisabled||textIsEmpty||priceIsEmpty}>Save</button>
			</form>
		)
	}
});

var App = React.createClass({
	render: function (argument) {
		return (
			<div>
				<h2 className="page-header">Expenses</h2>
				<Add />
				<Expenses data={expenses}/>
			</div>
		)
	}
});

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root')
);