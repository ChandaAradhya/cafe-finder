// Initialize map (default India view)
var map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create custom icon for cafes
var CafeIcon = L.divIcon({
    className: 'cafe-marker',
    iconSize: [20, 20]
});

// Sample cafe data for reviews and photos
const cafeDatabase = {
    "Unnamed Cafe": {
        rating: 4.2,
        reviews: [
            {
                author: "Rahul S.",
                date: "2023-10-15",
                rating: 4,
                content: "Great coffee and friendly staff. The atmosphere is cozy and perfect for working."
            },
            {
                author: "Priya M.",
                date: "2023-10-10",
                rating: 5,
                content: "Best cappuccino in town! The pastries are fresh and delicious."
            },
            {
                author: "Amit K.",
                date: "2023-10-05",
                rating: 3.5,
                content: "Good place to hang out with friends. WiFi could be faster though."
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "A cozy cafe with a warm atmosphere, serving quality coffee and fresh pastries. Perfect for meetings, work, or just relaxing.",
        hours: "8:00 AM - 10:00 PM",
        phone: "+91 98765 43210",
        wifi: "Free (High Speed)"
    },
    "Coffee Corner": {
        rating: 4.5,
        reviews: [
            {
                author: "Neha R.",
                date: "2023-10-12",
                rating: 5,
                content: "Absolutely love this place! The cold brew is amazing."
            },
            {
                author: "Vikram J.",
                date: "2023-10-08",
                rating: 4,
                content: "Great ambiance and good coffee selection. A bit pricey but worth it."
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "A modern coffee shop with a focus on specialty brews and artisanal pastries.",
        hours: "7:00 AM - 9:00 PM",
        phone: "+91 97654 32109",
        wifi: "Free (Standard)"
    },
    "Brew & Bites": {
        rating: 3.8,
        reviews: [
            {
                author: "Sanjay P.",
                date: "2023-10-14",
                rating: 4,
                content: "Good coffee and excellent sandwiches. Will visit again."
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "Coffee and light meals in a casual setting. Known for our signature blends.",
        hours: "7:30 AM - 10:30 PM",
        phone: "+91 96543 21098",
        wifi: "Free (High Speed)"
    },
    "Malabar": {
        rating: 4.2,
        reviews: [
            {
                author: "Priya M.",
                date: "2023-10-20",
                rating: 4,
                content: "Authentic South Indian filter coffee. The ambiance is traditional and cozy."
            },
            {
                author: "Rahul S.",
                date: "2023-10-18",
                rating: 5,
                content: "Best traditional coffee in Electronic City. Their snacks are delicious too!"
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "Authentic South Indian coffee house serving traditional filter coffee and snacks.",
        hours: "7:00 AM - 9:00 PM",
        phone: "+91 98765 43210",
        wifi: "Free (Standard)"
    },
    "Cafe Coffee Day": {
        rating: 4.0,
        reviews: [
            {
                author: "Amit K.",
                date: "2023-10-22",
                rating: 4,
                content: "Consistent quality and good ambiance. Perfect for meetings."
            },
            {
                author: "Neha R.",
                date: "2023-10-19",
                rating: 3.5,
                content: "Good coffee but can get crowded during peak hours."
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "Popular coffee chain with a wide variety of beverages and snacks.",
        hours: "8:00 AM - 11:00 PM",
        phone: "+91 97654 32109",
        wifi: "Free (High Speed)"
    },
    "Tea Treat": {
        rating: 4.3,
        reviews: [
            {
                author: "Sanjay P.",
                date: "2023-10-21",
                rating: 4.5,
                content: "Great tea selection and peaceful ambiance. Perfect for reading."
            }
        ],
        photos: [
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ],
        description: "Specialty tea house with a wide selection of teas from around the world.",
        hours: "9:00 AM - 10:00 PM",
        phone: "+91 96543 21098",
        wifi: "Free (High Speed)"
    }
};

var markersLayer = L.layerGroup().addTo(map);
var cafeList = document.getElementById("cafeList");
var resultsCount = document.getElementById("resultsCount");
var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var useLocationBtn = document.getElementById("useLocation");
var searchAreaBtn = document.getElementById("searchArea");

// Modal elements
var modal = document.getElementById("cafeModal");
var modalCafeName = document.getElementById("modalCafeName");
var modalStars = document.getElementById("modalStars");
var modalRating = document.getElementById("modalRating");
var modalPhotos = document.getElementById("modalPhotos");
var modalDescription = document.getElementById("modalDescription");
var modalAddress = document.getElementById("modalAddress");
var modalHours = document.getElementById("modalHours");
var modalPhone = document.getElementById("modalPhone");
var modalWifi = document.getElementById("modalWifi");
var modalReviews = document.getElementById("modalReviews");
var closeModal = document.getElementsByClassName("close")[0];

// Function to show loading state
function showLoading() {
    cafeList.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Searching for cafes...</p>
        </div>
    `;
}

// Function to show error state
function showError(message) {
    cafeList.innerHTML = `
        <div class="no-results">
            <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <p>${message}</p>
        </div>
    `;
}

// Function to format distance
function formatDistance(meters) {
    if (meters < 1000) {
        return Math.round(meters) + ' m';
    } else {
        return (meters / 1000).toFixed(1) + ' km';
    }
}

// Function to calculate distance between two coordinates
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Function to generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Function to show cafe details in modal
function showCafeDetails(cafeName, cafeData, lat, lon, address) {
    modalCafeName.textContent = cafeName;
    modalStars.innerHTML = generateStars(cafeData.rating);
    modalRating.textContent = cafeData.rating.toFixed(1);
    
    // Display photos
    modalPhotos.innerHTML = '';
    cafeData.photos.forEach(photoUrl => {
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = cafeName;
        img.className = 'cafe-photo';
        modalPhotos.appendChild(img);
    });
    
    // Set cafe details
    modalDescription.textContent = cafeData.description;
    modalAddress.textContent = address || 'Address not available';
    modalHours.textContent = cafeData.hours;
    modalPhone.textContent = cafeData.phone;
    modalWifi.textContent = cafeData.wifi;
    
    // Display reviews
    modalReviews.innerHTML = '';
    cafeData.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="stars">${generateStars(review.rating)}</div>
            <div class="review-content">${review.content}</div>
        `;
        modalReviews.appendChild(reviewElement);
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Function to fetch cafes using Overpass API
function fetchCafes(lat, lon) {
    markersLayer.clearLayers();
    showLoading();

    // Try multiple amenity types to find more cafes
    var overpassQuery = `
        [out:json];
        (
          node["amenity"="cafe"](around:5000,${lat},${lon});
          node["amenity"="coffee_shop"](around:5000,${lat},${lon});
          node["shop"="coffee"](around:5000,${lat},${lon});
        );
        out;
    `;
    
    var overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    fetch(overpassUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            cafeList.innerHTML = "";
            
            if (data.elements.length === 0) {
                // If no cafes found, show sample data for demonstration
                showSampleCafes(lat, lon);
                return;
            }

            // Update results count
            resultsCount.textContent = data.elements.length;
            
            // Sort cafes by distance
            data.elements.sort((a, b) => {
                const distA = getDistance(lat, lon, a.lat, a.lon);
                const distB = getDistance(lat, lon, b.lat, b.lon);
                return distA - distB;
            });

            data.elements.forEach((place, index) => {
                var name = place.tags.name || "Unnamed Cafe";
                var distance = getDistance(lat, lon, place.lat, place.lon);
                var address = place.tags['addr:street'] || '';
                
                // Get cafe data from our database or use default
                const cafeData = cafeDatabase[name] || cafeDatabase["Unnamed Cafe"];
                const rating = cafeData.rating;
                
                // Create a button element for the popup
                const viewDetailsBtn = document.createElement('button');
                viewDetailsBtn.textContent = 'View Details';
                viewDetailsBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer;';
                
                // Add marker
                var marker = L.marker([place.lat, place.lon], {icon: CafeIcon})
                    .addTo(markersLayer)
                    .bindPopup(`
                        <div style="min-width: 200px">
                            <h3 style="margin: 0 0 8px 0; color: var(--primary-color)">${name}</h3>
                            <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 8px;">
                                <div style="color: #ffc107;">${generateStars(rating)}</div>
                                <span style="color: #666;">${rating.toFixed(1)}</span>
                            </div>
                            <p style="margin: 0; color: #666">${formatDistance(distance)} away</p>
                            ${address ? `<p style="margin: 8px 0 0 0; font-size: 0.9em">${address}</p>` : ''}
                        </div>
                    `);
                
                // Add click event to the button
                viewDetailsBtn.onclick = function(e) {
                    e.stopPropagation();
                    showCafeDetails(name, cafeData, place.lat, place.lon, address);
                };
                
                // Add button to popup after it's opened
                marker.on('popupopen', function() {
                    const popupContent = document.querySelector('.leaflet-popup-content');
                    if (popupContent) {
                        popupContent.appendChild(viewDetailsBtn.cloneNode(true));
                    }
                });

                // Add to sidebar list
                var item = document.createElement("div");
                item.className = "cafe-item";
                item.innerHTML = `
                    <div class="cafe-name">${name}</div>
                    <div class="cafe-details">
                        <div class="cafe-meta">
                            <span><i class="fas fa-walking"></i> ${formatDistance(distance)}</span>
                            <span class="cafe-rating-small">
                                ${generateStars(rating)}
                                <span>${rating.toFixed(1)}</span>
                            </span>
                        </div>
                        <div class="cafe-action">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                `;
                
                item.addEventListener("click", function () {
                    map.setView([place.lat, place.lon], 17);
                    marker.openPopup();
                    
                    // Highlight selected cafe
                    document.querySelectorAll('.cafe-item').forEach(el => {
                        el.style.background = 'white';
                    });
                    this.style.background = '#f8f3f0';
                });
                
                cafeList.appendChild(item);
            });
        })
        .catch(err => {
            console.error(err);
            // If API fails, show sample data for demonstration
            showSampleCafes(lat, lon);
        });
}

// Function to show sample cafes when API fails or returns no results
function showSampleCafes(lat, lon) {
    // Sample cafe data for demonstration
    const sampleCafes = [
        {
            name: "Malabar",
            lat: lat + 0.005,
            lon: lon + 0.005,
            distance: 570,
            address: "Electronic City Phase 1"
        },
        {
            name: "Cafe Coffee Day",
            lat: lat + 0.006,
            lon: lon + 0.004,
            distance: 631,
            address: "Electronic City Phase 1"
        },
        {
            name: "Tea Treat",
            lat: lat + 0.007,
            lon: lon + 0.003,
            distance: 716,
            address: "Electronic City Phase 1"
        },
        {
            name: "Cafe Coffee Day",
            lat: lat + 0.008,
            lon: lon + 0.002,
            distance: 839,
            address: "Electronic City Phase 2"
        },
        {
            name: "Cafe Coffee Day",
            lat: lat + 0.01,
            lon: lon + 0.001,
            distance: 1210,
            address: "Electronic City Phase 2"
        }
    ];
    
    resultsCount.textContent = sampleCafes.length;
    
    sampleCafes.forEach((cafe, index) => {
        const cafeData = cafeDatabase[cafe.name] || cafeDatabase["Unnamed Cafe"];
        const rating = cafeData.rating;
        
        // Create a button element for the popup
        const viewDetailsBtn = document.createElement('button');
        viewDetailsBtn.textContent = 'View Details';
        viewDetailsBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer;';
        
        // Add marker
        var marker = L.marker([cafe.lat, cafe.lon], {icon: CafeIcon})
            .addTo(markersLayer)
            .bindPopup(`
                <div style="min-width: 200px">
                    <h3 style="margin: 0 0 8px 0; color: var(--primary-color)">${cafe.name}</h3>
                    <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 8px;">
                        <div style="color: #ffc107;">${generateStars(rating)}</div>
                        <span style="color: #666;">${rating.toFixed(1)}</span>
                    </div>
                    <p style="margin: 0; color: #666">${formatDistance(cafe.distance)} away</p>
                    <p style="margin: 8px 0 0 0; font-size: 0.9em">${cafe.address}</p>
                </div>
            `);
        
        // Add click event to the button
        viewDetailsBtn.onclick = function(e) {
            e.stopPropagation();
            showCafeDetails(cafe.name, cafeData, cafe.lat, cafe.lon, cafe.address);
        };
        
        // Add button to popup after it's opened
        marker.on('popupopen', function() {
            const popupContent = document.querySelector('.leaflet-popup-content');
            if (popupContent) {
                popupContent.appendChild(viewDetailsBtn.cloneNode(true));
            }
        });

        // Add to sidebar list
        var item = document.createElement("div");
        item.className = "cafe-item";
        item.innerHTML = `
            <div class="cafe-name">${cafe.name}</div>
            <div class="cafe-details">
                <div class="cafe-meta">
                    <span><i class="fas fa-walking"></i> ${formatDistance(cafe.distance)}</span>
                    <span class="cafe-rating-small">
                        ${generateStars(rating)}
                        <span>${rating.toFixed(1)}</span>
                    </span>
                </div>
                <div class="cafe-action">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
        
        item.addEventListener("click", function () {
            map.setView([cafe.lat, cafe.lon], 17);
            marker.openPopup();
            
            // Highlight selected cafe
            document.querySelectorAll('.cafe-item').forEach(el => {
                el.style.background = 'white';
            });
            this.style.background = '#f8f3f0';
        });
        
        cafeList.appendChild(item);
    });
}

// Function to search location
function searchLocation() {
    var query = searchInput.value.trim();
    if (!query) return;
    
    var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                var lat = parseFloat(data[0].lat);
                var lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 14);
                fetchCafes(lat, lon);
            } else {
                alert("Location not found! Please try a different search term.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error searching for location. Please try again.");
        });
}

// Event listeners
searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchLocation();
    }
});

searchButton.addEventListener("click", searchLocation);

useLocationBtn.addEventListener("click", function() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            map.setView([lat, lon], 14);
            fetchCafes(lat, lon);
            
            // Reverse geocode to get location name
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                .then(res => res.json())
                .then(data => {
                    if (data.display_name) {
                        searchInput.value = data.display_name.split(',')[0];
                    }
                });
        },
        function(error) {
            alert("Unable to retrieve your location. Please make sure location services are enabled.");
            console.error(error);
        }
    );
});

searchAreaBtn.addEventListener("click", function() {
    var center = map.getCenter();
    fetchCafes(center.lat, center.lng);
    searchInput.value = "Current Map Area";
});

// Modal close event
closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listener for map moveend to update cafes when map is moved
let updateTimeout;
map.on('moveend', function() {
    // Debounce to avoid too many API calls
    clearTimeout(updateTimeout);
    if (searchInput.value === "Current Map Area") {
        updateTimeout = setTimeout(function() {
            var center = map.getCenter();
            fetchCafes(center.lat, center.lng);
        }, 500);
    }
});

// Add attribution
const attribution = L.control({position: 'bottomright'});
attribution.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'attribution');
    div.innerHTML = '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>';
    return div;
};
attribution.addTo(map);

// Initialize with a popular location (Electronic City, Bangalore)
function initializeMap() {
    // Set view to Electronic City, Bangalore
    map.setView([12.8456, 77.6723], 14);
    searchInput.value = "Electronic City";
    fetchCafes(12.8456, 77.6723);
}

// Initialize the map when the page loads
window.onload = initializeMap;