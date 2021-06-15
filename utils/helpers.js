module.exports = {
	format_date: (date) => {
		return `${new Date(date).getMonth() + 1}/${new Date(
			date
		).getDate()}/${new Date(date).getFullYear()} ${new Date(
			date
		).getHours()}:${new Date(date).getMinutes()}`;
	},

	blog_preview: (body) => {
		return `${body.substring(0, 250)}...`;
	},
};
