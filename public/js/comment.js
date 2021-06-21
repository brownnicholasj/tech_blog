function formDisplay(event) {
	event.preventDefault();

	var formDisplay = document.getElementById('commentContainer');
	if (formDisplay.style.display === 'none') {
		formDisplay.style.display = 'block';
	} else {
		formDisplay.style.display = 'none';
	}
}

async function updateHandler(event) {
	event.preventDefault();

	const comment_body = document.querySelector('#comment-body').value;
	const blog_id = document.querySelector('#homeHeader').getAttribute('data-id');
	const author = document
		.querySelector('#commentContainer')
		.getAttribute('data-username');

	const response = await fetch(`/api/dashboard/comment`, {
		method: 'POST',
		body: JSON.stringify({
			comment_body,
			blog_id,
			author,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		var formDisplay = document.getElementById('commentContainer');
		formDisplay.style.display = 'none';

		document.location.reload();
	} else {
		alert('Failed to add comment');
	}
}

document.querySelector('#commentLink').addEventListener('click', formDisplay);

document
	.querySelector('.comment-form')
	.addEventListener('submit', updateHandler);
