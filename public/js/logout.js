const logoutHandler = async (event) => {
	event.preventDefault();

	const response = await fetch('/api/login/logout', {
		method: 'POST',
		body: JSON.stringify(),
		headers: { 'Content-Type': 'application/json' },
	});

	document.location.replace('/');
};

document.querySelector('.logout').addEventListener('click', logoutHandler);
