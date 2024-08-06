// Book Now button functionality
document.querySelectorAll('.product button').forEach(button => {
	button.addEventListener('click', () => {
		// Add product to cart logic here
		alert('Room has already Booked.check your registered Email');
	});
});
