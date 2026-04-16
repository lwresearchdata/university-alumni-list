// Admin password (CHANGE THIS to your own password)
const ADMIN_PASSWORD = "admin123"; // Change this!

// Load alumni data from localStorage or use default
let alumniDatabase = loadData();

function loadData() {
    const saved = localStorage.getItem('alumniDatabase');
    if (saved) {
        return JSON.parse(saved);
    }
    // Default data structure
    return {
        29: [
            { name: "John Smith", degree: "Computer Science", year: 2014, email: "john.smith@example.com", job: "Software Engineer at Google", phone: "+1234567890", location: "New York" },
            { name: "Sarah Johnson", degree: "Business Administration", year: 2014, email: "sarah.j@example.com", job: "Marketing Director", phone: "+1234567891", location: "London" }
        ],
        30: [
            { name: "David Wilson", degree: "Computer Science", year: 2015, email: "david.w@example.com", job: "Tech Lead at Microsoft", phone: "+1234567892", location: "Seattle" }
        ],
        31: [], 32: [], 33: [], 34: [], 35: [], 36: [], 37: [], 38: [], 39: []
    };
}

function saveData() {
    localStorage.setItem('alumniDatabase', JSON.stringify(alumniDatabase));
    updateMainSiteData(); // Update the public site
}

function updateMainSiteData() {
    // This will create/update a global variable for the main page
    localStorage.setItem('publicAlumniData', JSON.stringify(alumniDatabase));
}

// Login function
function checkLogin() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdminList();
        updateStats();
    } else {
        document.getElementById('loginError').innerText = 'Wrong password!';
    }
}

function logout() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

// Reset form
function resetForm() {
    document.getElementById('alumniForm').reset();
    document.getElementById('editIndex').value = '';
    document.getElementById('formTitle').innerText = 'Add New Alumni';
}

// Save alumni (add or edit)
document.getElementById('alumniForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const alumni = {
        name: document.getElementById('name').value,
        degree: document.getElementById('degree').value,
        year: parseInt(document.getElementById('year').value) || new Date().getFullYear(),
        email: document.getElementById('email').value,
        job: document.getElementById('job').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value
    };
    
    const intake = parseInt(document.getElementById('intake').value);
    const editIndex = document.getElementById('editIndex').value;
    
    if (!alumniDatabase[intake]) {
        alumniDatabase[intake] = [];
    }
    
    if (editIndex === '') {
        // Add new
        alumniDatabase[intake].push(alumni);
        alert('✅ Alumni added successfully!');
    } else {
        // Edit existing
        alumniDatabase[intake][parseInt(editIndex)] = alumni;
        alert('✅ Alumni updated successfully!');
    }
    
    saveData();
    resetForm();
    loadAdminList();
    updateStats();
});

// Load admin list
function loadAdminList() {
    const searchTerm = document.getElementById('searchAdmin').value.toLowerCase();
    const intakeFilter = document.getElementById('intakeFilter').value;
    const container = document.getElementById('alumniListAdmin');
    
    let allAlumni = [];
    
    for (let intake in alumniDatabase) {
        if (intakeFilter !== 'all' && intake !== intakeFilter) continue;
        
        alumniDatabase[intake].forEach((alumni, index) => {
            if (searchTerm && !alumni.name.toLowerCase().includes(searchTerm)) return;
            
            allAlumni.push({
                intake: intake,
                index: index,
                ...alumni
            });
        });
    }
    
    if (allAlumni.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">No alumni found</p>';
        return;
    }
    
    const table = `
        <table>
            <thead>
                <tr><th>Intake</th><th>Name</th><th>Degree</th><th>Job</th><th>Email</th><th>Location</th><th>Actions</th></tr>
            </thead>
            <tbody>
                ${allAlumni.map(alumni => `
                    <tr>
                        <td>${alumni.intake}</td>
                        <td>${alumni.name}</td>
                        <td>${alumni.degree}</td>
                        <td>${alumni.job || '-'}</td>
                        <td>${alumni.email || '-'}</td>
                        <td>${alumni.location || '-'}</td>
                        <td>
                            <button class="edit-btn" onclick="editAlumni(${alumni.intake}, ${alumni.index})">✏️ Edit</button>
                            <button class="delete-btn" onclick="deleteAlumni(${alumni.intake}, ${alumni.index})">🗑️ Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    container.innerHTML = table;
}

function editAlumni(intake, index) {
    const alumni = alumniDatabase[intake][index];
    document.getElementById('name').value = alumni.name;
    document.getElementById('intake').value = intake;
    document.getElementById('degree').value = alumni.degree;
    document.getElementById('year').value = alumni.year;
    document.getElementById('email').value = alumni.email || '';
    document.getElementById('job').value = alumni.job || '';
    document.getElementById('phone').value = alumni.phone || '';
    document.getElementById('location').value = alumni.location || '';
    document.getElementById('editIndex').value = index;
    document.getElementById('formTitle').innerText = 'Edit Alumni';
    
    // Scroll to form
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}

function deleteAlumni(intake, index) {
    if (confirm('Are you sure you want to delete this alumni record?')) {
        alumniDatabase[intake].splice(index, 1);
        saveData();
        loadAdminList();
        updateStats();
        alert('✅ Alumni deleted successfully!');
    }
}

function updateStats() {
    let total = 0;
    for (let intake in alumniDatabase) {
        total += alumniDatabase[intake].length;
    }
    document.getElementById('totalAlumni').innerText = total;
}

// Search and filter
document.getElementById('searchAdmin').addEventListener('input', loadAdminList);
document.getElementById('intakeFilter').addEventListener('change', loadAdminList);

// Export data
function exportData() {
    const dataStr = JSON.stringify(alumniDatabase, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `alumni_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    alert('✅ Data exported successfully!');
}

// Import data
function importData() {
    document.getElementById('importFile').click();
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (confirm('This will replace all existing data. Continue?')) {
                alumniDatabase = imported;
                saveData();
                loadAdminList();
                updateStats();
                alert('✅ Data imported successfully!');
            }
        } catch (error) {
            alert('❌ Invalid file format!');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// Update public site data
function updatePublicSite() {
    // Create a script that updates the main page
    const script = document.createElement('script');
    script.src = 'update-data.js';
    document.body.appendChild(script);
}

// Initial load
updateStats();
