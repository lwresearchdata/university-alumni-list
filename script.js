// Alumni Database for Intakes 29-39 (Based on your image)
const alumniData = {
    29: [
        { regNo: "D/ENG/15/0012", name: "KAL Wijeratne", degree: "Electrical and Electronic Engineering", year: 2014, email: "kal.w@example.com", job: "Electrical Engineer", phone: "+94 71 234 5678", location: "Colombo" },
        { regNo: "D/ENG/15/0013", name: "IU Jalthotage", degree: "Electrical and Electronic Engineering", year: 2014, email: "iu.j@example.com", job: "Power Systems Engineer", phone: "+94 71 234 5679", location: "Kandy" },
        { regNo: "D/ENG/15/0023", name: "PMD Nayanathara", degree: "Electrical and Electronic Engineering", year: 2014, email: "pmd.n@example.com", job: "Electronics Designer", phone: "+94 71 234 5680", location: "Galle" },
        { regNo: "D/ENG/15/0035", name: "HMKN Ariyapala", degree: "Electrical and Electronic Engineering", year: 2014, email: "hmkn.a@example.com", job: "Control Systems Engineer", phone: "+94 71 234 5681", location: "Kurunegala" },
        { regNo: "D/ENG/15/0038", name: "KDOV Dharmawardena", degree: "Electrical and Electronic Engineering", year: 2014, email: "kdov.d@example.com", job: "Renewable Energy Specialist", phone: "+94 71 234 5682", location: "Negombo" },
        { regNo: "D/ENG/15/0040", name: "AMH Shashiranga", degree: "Electrical and Electronic Engineering", year: 2014, email: "amh.s@example.com", job: "Telecom Engineer", phone: "+94 71 234 5683", location: "Matara" },
        { regNo: "D/ENG/15/0045", name: "DMKC Dissanayake", degree: "Electrical and Electronic Engineering", year: 2014, email: "dmkc.d@example.com", job: "Project Engineer", phone: "+94 71 234 5684", location: "Jaffna" },
        { regNo: "D/ENG/15/0047", name: "EMNK Ekanayaka", degree: "Electrical and Electronic Engineering", year: 2014, email: "emnk.e@example.com", job: "Research Engineer", phone: "+94 71 234 5685", location: "Anuradhapura" }
    ],
    30: [
        { regNo: "D/ENG/16/0001", name: "ABCD Perera", degree: "Electrical and Electronic Engineering", year: 2015, email: "abcd.p@example.com", job: "Electrical Engineer at LECO", phone: "+94 71 234 5686", location: "Colombo" },
        { regNo: "D/ENG/16/0002", name: "MNOP Silva", degree: "Electrical and Electronic Engineering", year: 2015, email: "mnop.s@example.com", job: "Automation Engineer", phone: "+94 71 234 5687", location: "Gampaha" }
    ],
    31: [], 32: [], 33: [], 34: [], 35: [], 36: [], 37: [], 38: [], 39: []
};

let currentFilter = "all";
let currentSearch = "";

// Function to display alumni cards
function displayAlumni() {
    const container = document.getElementById('alumniList');
    let filteredAlumni = [];
    
    // Filter by intake and search
    for (let intake in alumniData) {
        if (currentFilter !== "all" && currentFilter !== intake) continue;
        
        alumniData[intake].forEach(alumni => {
            if (currentSearch) {
                const searchLower = currentSearch.toLowerCase();
                if (alumni.name.toLowerCase().includes(searchLower) || 
                    alumni.regNo.toLowerCase().includes(searchLower)) {
                    filteredAlumni.push({ ...alumni, intake: intake });
                }
            } else {
                filteredAlumni.push({ ...alumni, intake: intake });
            }
        });
    }
    
    // Update stats
    document.getElementById('totalCount').innerText = `Total Alumni: ${filteredAlumni.length}`;
    
    // Display cards
    if (filteredAlumni.length === 0) {
        container.innerHTML = '<div class="no-results">No alumni found</div>';
        return;
    }
    
    container.innerHTML = filteredAlumni.map(alumni => `
        <div class="alumni-card">
            <div class="photo-placeholder">
                <div class="avatar-icon">👨‍🎓</div>
                <div class="degree-badge">BSc Eng Hons</div>
            </div>
            <div class="card-content">
                <div class="reg-number">${alumni.regNo}</div>
                <div class="alumni-name">${alumni.name}</div>
                <div class="alumni-degree">${alumni.degree}</div>
                <div class="alumni-intake">Intake ${alumni.intake} | ${alumni.year}</div>
                <button class="profile-btn" onclick="showProfile('${alumni.regNo}')">Go to profile →</button>
            </div>
        </div>
    `).join('');
}

// Function to show profile modal
function showProfile(regNo) {
    let alumni = null;
    let intakeNum = null;
    
    // Find the alumni
    for (let intake in alumniData) {
        const found = alumniData[intake].find(a => a.regNo === regNo);
        if (found) {
            alumni = found;
            intakeNum = intake;
            break;
        }
    }
    
    if (!alumni) return;
    
    const modal = document.getElementById('profileModal');
    const profileDetails = document.getElementById('profileDetails');
    
    profileDetails.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">👨‍🎓</div>
            <h2>${alumni.name}</h2>
            <p>${alumni.regNo}</p>
        </div>
        <div class="profile-info">
            <p><strong>📚 Degree:</strong> ${alumni.degree}</p>
            <p><strong>📅 Intake:</strong> ${intakeNum} (${alumni.year})</p>
            <p><strong>✉️ Email:</strong> ${alumni.email}</p>
            <p><strong>💼 Current Position:</strong> ${alumni.job}</p>
            <p><strong>📞 Phone:</strong> ${alumni.phone}</p>
            <p><strong>📍 Location:</strong> ${alumni.location}</p>
        </div>
    `;
    
    modal.style.display = "block";
}

// Close modal
document.querySelector('.close').onclick = function() {
    document.getElementById('profileModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Event listeners
document.getElementById('intakeSelect').addEventListener('change', (e) => {
    currentFilter = e.target.value;
    displayAlumni();
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    displayAlumni();
});

// Initial load
displayAlumni();
