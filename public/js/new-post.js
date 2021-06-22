async function newFormHandler(event) {
	event.preventDefault();
	const blog_title = document.querySelector('#blog-title').value;
	const blog_body = document.querySelector('#blog-body').value;
	const author = document
		.querySelector('#homeHeader')
		.getAttribute('data-username');
	const user_id = document.querySelector('#homeHeader').getAttribute('data-id');

	console.log(
		`title == ${blog_title}, body === ${blog_body}, auth == ${author}`
	);

	const response = await fetch(`/api/blog`, {
		method: 'POST',
		body: JSON.stringify({
			blog_title,
			blog_body,
			author,
			user_id,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to add blog');
	}
}

document
	.querySelector('.update-blog-form')
	.addEventListener('submit', newFormHandler);
