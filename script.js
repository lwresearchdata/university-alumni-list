// Alumni Database for Intakes 29-39
const alumniData = {
    29: [
        { name: "John Smith", degree: "Computer Science", year: 2014, email: "john.smith@example.com", job: "Software Engineer at Google" },
        { name: "Sarah Johnson", degree: "Business Administration", year: 2014, email: "sarah.j@example.com", job: "Marketing Director" },
        { name: "Michael Chen", degree: "Engineering", year: 2014, email: "michael.chen@example.com", job: "Civil Engineer" },
        { name: "Emily Brown", degree: "Medicine", year: 2014, email: "emily.brown@example.com", job: "Doctor at City Hospital" }
    ],
    30: [
        { name: "David Wilson", degree: "Computer Science", year: 2015, email: "david.w@example.com", job: "Tech Lead at Microsoft" },
        { name: "Lisa Anderson", degree: "Psychology", year: 2015, email: "lisa.a@example.com", job: "Clinical Psychologist" },
        { name: "James Taylor", degree: "Law", year: 2015, email: "james.t@example.com", job: "Corporate Lawyer" }
    ],
    31: [
        { name: "Maria Garcia", degree: "Architecture", year: 2016, email: "maria.g@example.com", job: "Senior Architect" },
        { name: "Robert Lee", degree: "Finance", year: 2016, email: "robert.l@example.com", job: "Investment Banker" }
    ],
    32: [
        { name: "Patricia Martinez", degree: "Education", year: 2017, email: "patricia.m@example.com", job: "School Principal" },
        { name: "Thomas Rodriguez", degree: "Engineering", year: 2017, email: "thomas.r@example.com", job: "Project Manager" }
    ],
    33: [
        { name: "Jennifer White", degree: "Biology", year: 2018, email: "jennifer.w@example.com", job: "Research Scientist" }
    ],
    34: [
        { name: "Charles Davis", degree: "Economics", year: 2019, email: "charles.d@example.com", job: "Economic Analyst" }
    ],
    35: [
        { name: "Jessica Miller", degree: "Computer Science", year: 2020, email: "jessica.m@example.com", job: "Software Developer" }
    ],
    36: [
        { name: "Daniel Moore", degree: "Physics", year: 2021, email: "daniel.m@example.com", job: "PhD Student" }
    ],
    37: [
        { name: "Amanda Taylor", degree: "Chemistry", year: 2022, email: "amanda.t@example.com", job: "Lab Technician" }
    ],
    38: [
        { name: "Kevin Anderson", degree: "Mathematics", year: 2023, email: "kevin.a@example.com", job: "Data Scientist" }
    ],
    39: [
        { name: "Michelle Thomas", degree: "Computer Science", year: 2024, email: "michelle.t@example.com", job: "Recent Graduate" },
        { name: "Brian Jackson", degree: "Business", year: 2024, email: "brian.j@example.com", job: "Recent Graduate" }
    ]
};

let currentIntake = 29;

// Function to display alumni
function displayAlumni(intake, searchTerm = "") {
    const alumni = alumniData[intake] || [];
    const alumniListDiv = document.getElementById('alumniList');
    const totalCountSpan = document.getElementById('totalCount');
    
    // Filter by search term
    let filteredAlumni = alumni;
    if (searchTerm) {
        filteredAlumni = alumni.filter(alumnus => 
            alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumnus.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumnus.job.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Update total count
    totalCountSpan.textContent = `Total: ${filteredAlumni.length} alumni`;
    
    // Display alumni
    if (filteredAlumni.length === 0) {
        alumniListDiv.innerHTML = '<div class="alumni-card" style="text-align: center; grid-column: 1/-1;">No alumni found for this intake/search criteria</div>';
        return;
    }
    
    alumniListDiv.innerHTML = filteredAlumni.map(alumnus => `
        <div class="alumni-card" onclick="showAlumniDetails('${alumnus.name}', '${alumnus.degree}', '${alumnus.year}', '${alumnus.email}', '${alumnus.job}')">
            <div class="alumni-name">${alumnus.name}</div>
            <div class="alumni-detail"><strong>Degree:</strong> ${alumnus.degree}</div>
            <div class="alumni-detail"><strong>Year:</strong> ${alumnus.year}</div>
            <div class="alumni-detail"><strong>Current Role:</strong> ${alumnus.job}</div>
            <div class="badge">Intake ${intake}</div>
        </div>
    `).join('');
}

// Function to show detailed info
function showAlumniDetails(name, degree, year, email, job) {
    alert(`🎓 Alumni Details\n\nName: ${name}\nDegree: ${degree}\nIntake Year: ${year}\nEmail: ${email}\nCurrent Position: ${job}`);
}

// Event listeners
document.getElementById('intakeSelect').addEventListener('change', (e) => {
    currentIntake = parseInt(e.target.value);
    const searchTerm = document.getElementById('searchInput').value;
    displayAlumni(currentIntake, searchTerm);
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    displayAlumni(currentIntake, searchTerm);
});

// Initial load
displayAlumni(29);
