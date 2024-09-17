document.getElementById
('contact-form').addEventListener
('submit',function (event) {
    event.preventDefault();
    var data = new FormData(event.
    target);
    fetch("https://formspree.io/f/xblreejw", {
      method: 'POST',
      body: data,
    }).then(Response => {
    if (Response.ok) {
      alert('Success');
    } else {
      alert('Error');
    }
    });
    document.getElementById('contact-form').reset();
})