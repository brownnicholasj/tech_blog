module.exports = {
	format_date: (date) => {
		var hours = date.getHours();
		var min = date.getMinutes();

		min = min < 10 ? '0' + min : min;

		return `${new Date(date).getMonth() + 1}/${new Date(
			date
		).getDate()}/${new Date(date).getFullYear()} ${hours}:${min}`;
	},

	blog_preview: (body) => {
		return `${body.substring(0, 250)}...`;
	},
};
