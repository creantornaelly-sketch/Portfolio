// JavaScript Document
document.querySelectorAll('a[href^="#"]').forEach() callback
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		target.scrollToView({
			behaviors; 'smooth'
		});
	});
});

