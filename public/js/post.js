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
		document.location.replace('/dashboard');
	} else {
		alert('Failed to update blog');
	}
}

async function deleteHandler(event) {
	event.preventDefault();

	const blog_id = document.querySelector('#blog-title').getAttribute('data-id');

	console.log(blog_id);
	const response = await fetch(`/api/dashboard/${blog_id}`, {
		method: 'DELETE',
		body: JSON.stringify({
			blog_id,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to delete blog');
	}
}

document.getElementById('updateBtn').addEventListener('click', updateHandler);

document.getElementById('deleteBtn').addEventListener('click', deleteHandler);
