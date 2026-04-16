// Load data from localStorage (set by admin panel)
function loadAlumniData() {
    const savedData = localStorage.getItem('publicAlumniData');
    if (savedData) {
        return JSON.parse(savedData);
    }
    // Fallback default data
    return {
        29: [
            { name: "John Smith", degree: "Computer Science", year: 2014, email: "john.smith@example.com", job: "Software Engineer at Google" },
            { name: "Sarah Johnson", degree: "Business Administration", year: 2014, email: "sarah.j@example.com", job: "Marketing Director" }
        ],
        30: [
            { name: "David Wilson", degree: "Computer Science", year: 2015, email: "david.w@example.com", job: "Tech Lead at Microsoft" }
        ]
    };
}

let alumniData = loadAlumniData();
let currentIntake = 29;

function displayAlumni(intake, searchTerm = "") {
    const alumni = alumniData[intake] || [];
    const alumniListDiv = document.getElementById('alumniList');
    const totalCountSpan = document.getElementById('totalCount');
    
    let filteredAlumni = alumni;
    if (searchTerm) {
        filteredAlumni = alumni.filter(alumnus => 
            alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (alumnus.degree && alumnus.degree.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (alumnus.job && alumnus.job.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }
    
    totalCountSpan.textContent = `Total: ${filteredAlumni.length} alumni`;
    
    if (filteredAlumni.length === 0) {
        alumniListDiv.innerHTML = '<div class="alumni-card" style="text-align: center; grid-column: 1/-1;">No alumni found</div>';
        return;
    }
    
    alumniListDiv.innerHTML = filteredAlumni.map(alumnus => `
        <div class="alumni-card" onclick="showAlumniDetails('${alumnus.name}', '${alumnus.degree}', '${alumnus.year}', '${alumnus.email}', '${alumnus.job}')">
            <div class="alumni-name">${alumnus.name}</div>
            <div class="alumni-detail"><strong>Degree:</strong> ${alumnus.degree || 'N/A'}</div>
            <div class="alumni-detail"><strong>Year:</strong> ${alumnus.year || 'N/A'}</div>
            <div class="alumni-detail"><strong>Current Role:</strong> ${alumnus.job || 'N/A'}</div>
            <div class="badge">Intake ${intake}</div>
        </div>
    `).join('');
}

function showAlumniDetails(name, degree, year, email, job) {
    alert(`🎓 Alumni Details\n\nName: ${name}\nDegree: ${degree}\nGraduation Year: ${year}\nEmail: ${email}\nCurrent Position: ${job}`);
}

// Listen for data updates
window.addEventListener('storage', (e) => {
    if (e.key === 'publicAlumniData') {
        alumniData = JSON.parse(e.newValue);
        displayAlumni(currentIntake, document.getElementById('searchInput').value);
    }
});

document.getElementById('intakeSelect').addEventListener('change', (e) => {
    currentIntake = parseInt(e.target.value);
    displayAlumni(currentIntake, document.getElementById('searchInput').value);
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    displayAlumni(currentIntake, e.target.value);
});

displayAlumni(29);
