async function editFormHandler(event) {
    event.preventDefault();

    console.log('save button clicked');
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim();
    const pet_name = document.querySelector('input[name="pet-name"]').value.trim();
    const pet_type = document.querySelector('input[name="pet-type"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_text,
            pet_name,
            pet_type,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
