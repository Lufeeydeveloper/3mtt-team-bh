// Sample data for recycling centers
const recyclingCenters = [
    { name: "LAWMA", location: "Lagos" },
    { name: "Eco Barter.Africa", location: "Abuja Nigeria", website: "www.ecobarter.africa" },
    { name: "Africa Zero Waste Recycling Partners", location: "Jos, Nigeria" }
    { name: "Recycle Waste Plant", location: "Bauchi Nigeria" }
     { name: "Kano Waste Management", location: "Kano Nigeria" }

// User Authentication (Mock Implementation)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
        document.getElementById('auth-section').style.display = 'none';
    } else {
        alert("Please enter valid credentials.");
    }
}

function register() {
    alert("Registration Successful!");
}

// Waste Pickup Scheduling
function schedulePickup() {
    const address = document.getElementById('pickup-address').value;
    const date = document.getElementById('pickup-date').value;
    const wasteType = document.getElementById('waste-type').value;

    if (address && date && wasteType) {
        alert(`Pickup scheduled on ${date} at ${address} for ${wasteType} waste.`);
    } else {
        alert("Please fill in all fields.");
    }
}

// Recycling Tracking & Rewards
let totalWasteRecycled = 0;

function trackRecycling() {
    totalWasteRecycled += 1;
    document.getElementById('waste-recycled').textContent = totalWasteRecycled;
    alert(`You have recycled 1 kg! Total recycled: ${totalWasteRecycled} kg.`);
}

// Locate Recycling Centers
function findCenters() {
    const list = document.getElementById('recycling-centers-list');
    list.innerHTML = '';

    recyclingCenters.forEach(center => {
        const listItem = document.createElement('li');
        listItem.textContent = `${center.name} - Location: ${center.location}`;
        list.appendChild(listItem);
    });
}
