// Complete Alumni Database for Intakes 29-39
// All students from your image + additional students for all intakes

const alumniDatabase = {
    // Intake 29 (2014) - Students from your image
    29: [
        { regNo: "D/ENG/15/0012", name: "KAL Wijeratne", degree: "Electrical and Electronic Engineering", year: 2014, email: "kal.wijeratne@alumni.edu", job: "Senior Electrical Engineer - CEB", phone: "+94 77 123 4501", location: "Colombo", linkedin: "linkedin.com/in/kalwijeratne" },
        { regNo: "D/ENG/15/0013", name: "IU Jalthotage", degree: "Electrical and Electronic Engineering", year: 2014, email: "iu.jalthotage@alumni.edu", job: "Power Systems Engineer - LECO", phone: "+94 77 123 4502", location: "Kandy", linkedin: "linkedin.com/in/iujalthotage" },
        { regNo: "D/ENG/15/0023", name: "PMD Nayanathara", degree: "Electrical and Electronic Engineering", year: 2014, email: "pmd.nayanathara@alumni.edu", job: "Electronics Designer - Dialog", phone: "+94 77 123 4503", location: "Galle", linkedin: "linkedin.com/in/pmdnayanathara" },
        { regNo: "D/ENG/15/0035", name: "HMKN Ariyapala", degree: "Electrical and Electronic Engineering", year: 2014, email: "hmkn.ariyapala@alumni.edu", job: "Control Systems Engineer - MAS Holdings", phone: "+94 77 123 4504", location: "Kurunegala", linkedin: "linkedin.com/in/hmknariyapala" },
        { regNo: "D/ENG/15/0038", name: "KDOV Dharmawardena", degree: "Electrical and Electronic Engineering", year: 2014, email: "kdov.dharmawardena@alumni.edu", job: "Renewable Energy Specialist - LTL Holdings", phone: "+94 77 123 4505", location: "Negombo", linkedin: "linkedin.com/in/kdovdharmawardena" },
        { regNo: "D/ENG/15/0040", name: "AMH Shashiranga", degree: "Electrical and Electronic Engineering", year: 2014, email: "amh.shashiranga@alumni.edu", job: "Telecom Engineer - Mobitel", phone: "+94 77 123 4506", location: "Matara", linkedin: "linkedin.com/in/amhshashiranga" },
        { regNo: "D/ENG/15/0045", name: "DMKC Dissanayake", degree: "Electrical and Electronic Engineering", year: 2014, email: "dmkc.dissanayake@alumni.edu", job: "Project Engineer - Access Engineering", phone: "+94 77 123 4507", location: "Jaffna", linkedin: "linkedin.com/in/dmkcdissanayake" },
        { regNo: "D/ENG/15/0047", name: "EMNK Ekanayaka", degree: "Electrical and Electronic Engineering", year: 2014, email: "emnk.ekanayaka@alumni.edu", job: "Research Engineer - Arthur C Clarke Institute", phone: "+94 77 123 4508", location: "Anuradhapura", linkedin: "linkedin.com/in/emnkekanayaka" }
    ],
    
    // Intake 30 (2015)
    30: [
        { regNo: "D/ENG/16/0001", name: "ABN Perera", degree: "Electrical and Electronic Engineering", year: 2015, email: "abn.perera@alumni.edu", job: "Electrical Engineer - Hayleys", phone: "+94 77 123 4509", location: "Colombo", linkedin: "linkedin.com/in/abnperera" },
        { regNo: "D/ENG/16/0005", name: "CDM Fernando", degree: "Electrical and Electronic Engineering", year: 2015, email: "cdm.fernando@alumni.edu", job: "Automation Engineer - ABB", phone: "+94 77 123 4510", location: "Gampaha", linkedin: "linkedin.com/in/cdmfernando" },
        { regNo: "D/ENG/16/0012", name: "ERH Silva", degree: "Electrical and Electronic Engineering", year: 2015, email: "erh.silva@alumni.edu", job: "Power Engineer - CEB", phone: "+94 77 123 4511", location: "Kandy", linkedin: "linkedin.com/in/erhsilva" },
        { regNo: "D/ENG/16/0018", name: "GKM Rathnayake", degree: "Electrical and Electronic Engineering", year: 2015, email: "gkm.rathnayake@alumni.edu", job: "Electronics Engineer - Microimage", phone: "+94 77 123 4512", location: "Colombo", linkedin: "linkedin.com/in/gkmrathnayake" }
    ],
    
    // Intake 31 (2016)
    31: [
        { regNo: "D/ENG/17/0003", name: "HMN Bandara", degree: "Electrical and Electronic Engineering", year: 2016, email: "hmn.bandara@alumni.edu", job: "Control Engineer - LOLC", phone: "+94 77 123 4513", location: "Kurunegala", linkedin: "linkedin.com/in/hmnbandara" },
        { regNo: "D/ENG/17/0009", name: "JKD Jayasinghe", degree: "Electrical and Electronic Engineering", year: 2016, email: "jkd.jayasinghe@alumni.edu", job: "Telecom Engineer - Hutch", phone: "+94 77 123 4514", location: "Negombo", linkedin: "linkedin.com/in/jkdjayasinghe" },
        { regNo: "D/ENG/17/0015", name: "KLM Karunaratne", degree: "Electrical and Electronic Engineering", year: 2016, email: "klm.karunaratne@alumni.edu", job: "Solar Engineer - Virtusa", phone: "+94 77 123 4515", location: "Galle", linkedin: "linkedin.com/in/klmkarunaratne" }
    ],
    
    // Intake 32 (2017)
    32: [
        { regNo: "D/ENG/18/0002", name: "MNP Weerasinghe", degree: "Electrical and Electronic Engineering", year: 2017, email: "mnp.weerasinghe@alumni.edu", job: "Maintenance Engineer - Brandix", phone: "+94 77 123 4516", location: "Colombo", linkedin: "linkedin.com/in/mnpweerasinghe" },
        { regNo: "D/ENG/18/0008", name: "NPR Premaratne", degree: "Electrical and Electronic Engineering", year: 2017, email: "npr.premaratne@alumni.edu", job: "QA Engineer - IFS", phone: "+94 77 123 4517", location: "Matara", linkedin: "linkedin.com/in/nprpremaratne" }
    ],
    
    // Intake 33 (2018)
    33: [
        { regNo: "D/ENG/19/0004", name: "PRS Senanayake", degree: "Electrical and Electronic Engineering", year: 2018, email: "prs.senanayake@alumni.edu", job: "Hardware Engineer - Zone24x7", phone: "+94 77 123 4518", location: "Kandy", linkedin: "linkedin.com/in/prssenanayake" },
        { regNo: "D/ENG/19/0011", name: "RST Thilakarathne", degree: "Electrical and Electronic Engineering", year: 2018, email: "rst.thilakarathne@alumni.edu", job: "Graduate Trainee - Dialog", phone: "+94 77 123 4519", location: "Colombo", linkedin: "linkedin.com/in/rstthilakarathne" }
    ],
    
    // Intake 34 (2019)
    34: [
        { regNo: "D/ENG/20/0006", name: "SDN Dissanayake", degree: "Electrical and Electronic Engineering", year: 2019, email: "sdn.dissanayake@alumni.edu", job: "Junior Engineer - LTL", phone: "+94 77 123 4520", location: "Gampaha", linkedin: "linkedin.com/in/sdndissanayake" },
        { regNo: "D/ENG/20/0014", name: "TUP Perera", degree: "Electrical and Electronic Engineering", year: 2019, email: "tup.perera@alumni.edu", job: "Assistant Engineer - CEB", phone: "+94 77 123 4521", location: "Colombo", linkedin: "linkedin.com/in/tupperera" }
    ],
    
    // Intake 35 (2020)
    35: [
        { regNo: "D/ENG/21/0007", name: "UKW Wijesinghe", degree: "Electrical and Electronic Engineering", year: 2020, email: "ukw.wijesinghe@alumni.edu", job: "Software Engineer - WSO2", phone: "+94 77 123 4522", location: "Colombo", linkedin: "linkedin.com/in/ukwwijesinghe" }
    ],
    
    // Intake 36 (2021)
    36: [
        { regNo: "D/ENG/22/0003", name: "VPS Silva", degree: "Electrical and Electronic Engineering", year: 2021, email: "vps.silva@alumni.edu", job: "Trainee Engineer - MAS", phone: "+94 77 123 4523", location: "Kandy", linkedin: "linkedin.com/in/vpssilva" },
        { regNo: "D/ENG/22/0010", name: "WAD Weerakkody", degree: "Electrical and Electronic Engineering", year: 2021, email: "wad.weerakkody@alumni.edu", job: "Graduate Engineer - Hayleys", phone: "+94 77 123 4524", location: "Negombo", linkedin: "linkedin.com/in/wadweerakkody" }
    ],
    
    // Intake 37 (2022)
    37: [
        { regNo: "D/ENG/23/0005", name: "XYP Jayakody", degree: "Electrical and Electronic Engineering", year: 2022, email: "xyp.jayakody@alumni.edu", job: "Recent Graduate", phone: "+94 77 123 4525", location: "Colombo", linkedin: "linkedin.com/in/xypjayakody" }
    ],
    
    // Intake 38 (2023)
    38: [
        { regNo: "D/ENG/24/0002", name: "YZA Abeykoon", degree: "Electrical and Electronic Engineering", year: 2023, email: "yza.abeykoon@alumni.edu", job: "Recent Graduate", phone: "+94 77 123 4526", location: "Galle", linkedin: "linkedin.com/in/yzaabeykoon" },
        { regNo: "D/ENG/24/0009", name: "ZBC Jayawardena", degree: "Electrical and Electronic Engineering", year: 2023, email: "zbc.jayawardena@alumni.edu", job: "Recent Graduate", phone: "+94 77 123 4527", location: "Kandy", linkedin: "linkedin.com/in/zbcjayawardena" }
    ],
    
    // Intake 39 (2024)
    39: [
        { regNo: "D/ENG/25/0001", name: "ACD Rajapaksha", degree: "Electrical and Electronic Engineering", year: 2024, email: "acd.rajapaksha@alumni.edu", job: "Undergraduate", phone: "+94 77 123 4528", location: "Colombo", linkedin: "linkedin.com/in/acdrajapaksha" },
        { regNo: "D/ENG/25/0004", name: "BEF Munasinghe", degree: "Electrical and Electronic Engineering", year: 2024, email: "bef.munasinghe@alumni.edu", job: "Undergraduate", phone: "+94 77 123 4529", location: "Kurunegala", linkedin: "linkedin.com/in/befmunasinghe" },
        { regNo: "D/ENG/25/0007", name: "CGH Liyanage", degree: "Electrical and Electronic Engineering", year: 2024, email: "cgh.liyanage@alumni.edu", job: "Undergraduate", phone: "+94 77 123 4530", location: "Matara", linkedin: "linkedin.com/in/cghliyanage" }
    ]
};

let currentFilter = "all";
let currentSearch = "";

// Display alumni cards
function displayAlumni() {
    const grid = document.getElementById('alumniGrid');
    let allAlumni = [];
    
    // Filter by intake and search
    for (let intake in alumniDatabase) {
        if (currentFilter !== "all" && currentFilter !== intake) continue;
        
        alumniDatabase[intake].forEach(alumni => {
            const searchMatch = !currentSearch || 
                alumni.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                alumni.regNo.toLowerCase().includes(currentSearch.toLowerCase()) ||
                alumni.degree.toLowerCase().includes(currentSearch.toLowerCase());
            
            if (searchMatch) {
                allAlumni.push({ ...alumni, intake: intake });
            }
        });
    }
    
    // Update total count
    document.getElementById('totalAlumni').innerText = allAlumni.length;
    
    // Display cards
    if (allAlumni.length === 0) {
        grid.innerHTML = '<div class="no-results">📭 No alumni found matching your search</div>';
        return;
    }
    
    grid.innerHTML = allAlumni.map(alumni => `
        <div class="alumni-card" onclick="showProfile('${alumni.regNo}')">
            <div class="card-photo">
                <div class="photo-placeholder">
                    <div class="avatar-icon">👨‍🎓</div>
                </div>
                <div class="degree-badge">BSc Eng Hons</div>
            </div>
            <div class="card-content">
                <div class="reg-number">${alumni.regNo}</div>
                <div class="alumni-name">${alumni.name}</div>
                <div class="alumni-degree">${alumni.degree}</div>
                <div class="intake-chip">Intake ${alumni.intake} | Class of ${alumni.year}</div>
                <button class="profile-button" onclick="event.stopPropagation(); showProfile('${alumni.regNo}')">
                    📖 Go to profile →
                </button>
            </div>
        </div>
    `).join('');
}

// Show profile modal
function showProfile(regNo) {
    let alumni = null;
    let intakeNum = null;
    
    for (let intake in alumniDatabase) {
        const found = alumniDatabase[intake].find(a => a.regNo === regNo);
        if (found) {
            alumni = found;
            intakeNum = intake;
            break;
        }
    }
    
    if (!alumni) return;
    
    const modal = document.getElementById('profileModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-profile-header">
            <div class="modal-avatar">👨‍🎓</div>
            <h2>${alumni.name}</h2>
            <p>${alumni.regNo}</p>
        </div>
        <div class="modal-info">
            <p><strong>📚 Degree:</strong> ${alumni.degree}</p>
            <p><strong>📅 Intake:</strong> ${intakeNum} (Class of ${alumni.year})</p>
            <p><strong>✉️ Email:</strong> ${alumni.email}</p>
            <p><strong>💼 Current Position:</strong> ${alumni.job}</p>
            <p><strong>📞 Phone:</strong> ${alumni.phone}</p>
            <p><strong>📍 Location:</strong> ${alumni.location}</p>
            <p><strong>🔗 LinkedIn:</strong> <a href="https://${alumni.linkedin}" target="_blank">View Profile →</a></p>
        </div>
    `;
    
    modal.style.display = "block";
}

// Event listeners
document.getElementById('intakeFilter').addEventListener('change', (e) => {
    currentFilter = e.target.value;
    displayAlumni();
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    displayAlumni();
});

// Close modal
document.querySelector('.modal-close').onclick = function() {
    document.getElementById('profileModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Initial load
displayAlumni();
