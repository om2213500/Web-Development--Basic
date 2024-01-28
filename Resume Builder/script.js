// script.js
document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resumeForm');
    const outputDiv = document.getElementById('output');

    resumeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(resumeForm);
        const resumeData = {};

        formData.forEach((value, key) => {
            resumeData[key] = value;
        });

        // Generate the resume HTML
        const resumeHTML = `
            <h2>${resumeData.name}</h2>
            <p>Email: ${resumeData.email}</p>
            <p>Contact: ${resumeData.contact}</p>
            <p>Linkedlnprofile: ${resumeData.linkedlnprofile}</p>
            <p>Githubprofile: ${resumeData.githubprofile}</p>
            <h3>Education:</h3>
            <p>${resumeData.education}</p>
            <h3>Project:</h3>
            <p>${resumeData.project}</p>
            <h3>Certification:</h3>
            <p>${resumeData.certification}</p>
            <h3>Skills:</h3>
            <p>${resumeData.skills}</p>
            <h3>Experience:</h3>
            <p>${resumeData.experience}</p>   
        `;

        // Display the generated resume
        outputDiv.innerHTML = resumeHTML;
    });
});
