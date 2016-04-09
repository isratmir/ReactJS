var photos = ['img/1.jpg','img/2.jpg','img/3.jpg'];

var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четчерг, четвертого числа...'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
	}
];

var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				К сожалению, новостей нет.
			</div>
		);
	}
});

var Photo = React.createClass({
	render: function () {
		return (
			<img src={this.props.img}>
		);
	}
});

var Comments = React.createClass({
	render: function () {
		return (
			<div className="Comments">
				Нет новостей - комментировать нечего
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				Всем привет, я компонент App! Я умею отображать новости.
				<News />
				<Comments />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);