// Content for each page
const homeContent = `
    <section class="homefinal">
        <div class="image">
            <img src="pic.png" style="width: 800px; height: 500px;">
        </div>
    </section>`;

        const galleryContent = `
            <section class="projects"> 
                <h1 class="heading">Gallery</h1>
                <div class="container">
                    <div id="slide">
                        <div class="item" style="background-image: url(11.jpg);">
                            <div class="content">
                                <div class="name">OUR ART PIECES</div>
                                <div class="des">A collection like never before</div>
                            </div>
                        </div>
                        <div class="item" style="background-image: url(22.jpg);">
                            <div class="content">
                                <div class="name"></div>
                                <div class="des"></div>
                            </div>
                        </div>
                        <div class="item" style="background-image: url(33.jpg);">
                            <div class="content">
                                <div class="name"></div>
                                <div class="des"></div>
                            </div>
                        </div>
                        <div class="item" style="background-image: url(44.jpeg);">
                            <div class="content">
                                <div class="name"></div>
                                <div class="des"></div>
                            </div>
                        </div>
                        <div class="item" style="background-image: url(55.jpg);">
                            <div class="content">
                                <div class="name"></div>
                                <div class="des"></div>
                            </div>
                        </div>
                        <div class="item" style="background-image: url(66.jpeg);">
                            <div class="content">
                                <div class="name"></div>
                                <div class="des"></div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button id="prev"><i class='bx bx-left-arrow-alt'></i></button>
                        <button id="next"><i class='bx bx-right-arrow-alt'></i></button>
                    </div>
                </div>
            </section>`;
        
       


const artistsContent = `
    <h2>Meet Our Artists</h2>
    <div class="artists-grid">
        <div class="artist-card">
            <img src="images/artists/artist1.jpeg" alt="Artist 1">
            <div class="artist-info">
                <h3>Artist 1 - Abstract Modernist</h3>
                <p>Artist 1 specializes in modern abstract art. Their work explores vibrant colors and geometric forms that evoke emotion and thought.</p>
                <button class="favorite-button" onclick="addToFavorites('Artist 1')">Add to Favorites</button>
            </div>
        </div>
        <div class="artist-card">
            <img src="images/artists/artist2.jpeg" alt="Artist 2">
            <div class="artist-info">
                <h3>Artist 2 - Contemporary Expressionist</h3>
                <p>Known for vivid colors and unique shapes, Artist 2 captures the beauty of human emotions through energetic brushstrokes.</p>
                <button class="favorite-button" onclick="addToFavorites('Artist 2')">Add to Favorites</button>
            </div>
        </div>
        <div class="artist-card">
            <img src="images/artists/artist3.jpeg" alt="Artist 3">
            <div class="artist-info">
                <h3>Artist 3 - Mixed Media Artist</h3>
                <p>Artist 3 blends photography with mixed media to create visually compelling and thought-provoking pieces.</p>
                <button class="favorite-button" onclick="addToFavorites('Artist 3')">Add to Favorites</button>
            </div>
        </div>
        <div class="artist-card">
            <img src="images/artists/artist4.jpeg" alt="Artist 4">
            <div class="artist-info">
                <h3>Artist 4 - Digital Sculptor</h3>
                <p>Focusing on digital art and 3D modeling, Artist 4's works bring futuristic and abstract sculptures to life.</p>
                <button class="favorite-button" onclick="addToFavorites('Artist 4')">Add to Favorites</button>
            </div>
        </div>
    </div>
`;

const eventsContent = `
<div class="eventsss">
    <div class="event-item">
        <h3>Art Expo in New York</h3>
        <img src="images/events/event1.jpeg" alt="Event 1">
        <p>Date: November 5th, 2024</p>
    </div>
    <div class="event-item">
        <h3>Virtual Art Tour</h3>
        <img src="images/events/event2.jpeg" alt="Event 2">
        <p>Date: December 15th, 2024</p>
    </div>
    <div class="event-item">
        <h3>Modern Art Showcase in Paris</h3>
        <img src="images/events/event3.jpeg" alt="Event 3">
        <p>Date: January 20th, 2025</p>
    </div>
    </div>`;

const shopContent = `<div class="comm">
    
    <div class="commission-item">
        <h3>Custom Abstract Digital Painting</h3>
        <img src="images/comissions/11.jpg" alt="Commission 1">
        <p>Price: $500</p>
        <button>Buy Now</button>
    </div>
    <div class="commission-item">
        <h3>Portrait Oil Painting</h3>
        <img src="images/comissions/22.jpg" alt="Commission 2">
        <p>Price: $800</p>
        <button>Buy Now</button>
    </div></div>`;

const contactContent = `
    <h2>Contact Us</h2>
    <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
    </form>`;

const favoritesContent = `<div class="favsss">
    <h2></h2>
    <ul id="favoritesList"></ul></div>`;

// Load content dynamically
function loadContent(content) {
        const contentArea = document.getElementById('content');
        contentArea.innerHTML = content; // Insert new content
    
        // Gallery Navigation Setup
        if (content === galleryContent) {
            setupGalleryNavigation();
        }
    
        // Display Favorites List
        if (content === favoritesContent) {
            displayFavorites();
        }
    }
    
    // Setup gallery navigation
    function setupGalleryNavigation() {
        document.getElementById('next').onclick = function() {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]); // Move first to end
        };
        document.getElementById('prev').onclick = function() {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').prepend(lists[lists.length - 1]); // Move last to front
        };
    }
    
    async function addToFavorites(artistName) {
        let favorites = await getFavorites();
        
        if (!favorites.includes(artistName)) {
            favorites.push(artistName);
            await saveFavorites(favorites);
            alert(`${artistName} added to favorites!`);
        } else {
            alert(`${artistName} is already in favorites!`);
        }
        displayFavorites(); // Refresh the favorites list
    }
    
    // Asynchronous function to get favorites
    function getFavorites() {
        return new Promise((resolve) => {
            // Simulating an async data retrieval with a timeout
            setTimeout(() => {
                const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                resolve(favorites);
            }, 500); // 500 ms delay to mimic async behavior
        });
    }
    
    // Asynchronous function to save favorites
    function saveFavorites(favorites) {
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem('favorites', JSON.stringify(favorites));
                resolve();
            }, 500); // 500 ms delay to mimic async save
        });
    }
    
    // Asynchronously display favorites
    async function displayFavorites() {
        const favoritesList = document.getElementById('favoritesList');
        favoritesList.innerHTML = ''; // Clear existing list
        const favorites = await getFavorites();
    
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<li>No favorite artists yet!</li>';
        } else {
            favorites.forEach(favorite => {
                const listItem = document.createElement('li');
                listItem.textContent = favorite;
                favoritesList.appendChild(listItem);
            });
        }
    }
    
    // Event listeners for navbar links
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('homeLink').addEventListener('click', () => loadContent(homeContent));
        document.getElementById('artistsLink').addEventListener('click', () => loadContent(artistsContent));
        document.getElementById('galleryLink').addEventListener('click', () => loadContent(galleryContent));
        document.getElementById('eventsLink').addEventListener('click', () => loadContent(eventsContent));
        document.getElementById('shopLink').addEventListener('click', () => loadContent(shopContent));
        document.getElementById('contactLink').addEventListener('click', () => loadContent(contactContent));
        document.getElementById('favoritesLink').addEventListener('click', () => loadContent(favoritesContent));
    
        // Initial content load
        loadContent(homeContent);

        const toggleIcon = document.querySelector('.toggle-icon');
    toggleIcon.addEventListener('click', () => {
        toggleIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    });
    });