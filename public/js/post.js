async function updateHandler(event) {
	event.preventDefault();

	const blog_title = document.querySelector('#blog-title').value;
	const blog_body = document.querySelector('#blog-body').value;
	const blog_id = document.querySelector('#blog-title').getAttribute('data-id');

	const response = await fetch(`/api/dashboard/${blog_id}`, {
		method: 'PUT',
		body: JSON.stringify({
			blog_title,
			blog_body,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to update blog');
	}
}

async function newButtonHandler(event) {
	event.preventDefault();

	const blog_title = document.querySelector('#blog-title').value;
	const blog_body = document.querySelector('#blog-body').value;
	const blog_id = document.querySelector('#blog-title').getAttribute('data-id');

	const response = await fetch(`/api/dashboard/${blog_id}`, {
		method: 'PUT',
		body: JSON.stringify({
			blog_title,
			blog_body,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/');
	} else {
		alert('Failed to update blog');
	}
}

document
	.querySelector('.update-blog-form')
	.addEventListener('submit', updateHandler);

// document
// 	.querySelector('.newBlogBtn')
// 	.addEventListener('click', newButtonHandler);
