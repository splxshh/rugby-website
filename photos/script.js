document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    var imageContainer = document.getElementById("imageContainer");
    var navButtonsContainer = document.getElementById("navButtons");

    // Path to the image files
    var imagePath = "photos/olaves/";

    // Array of image filenames
    var imageFilenames = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

    // Index of the currently displayed image
    var currentIndex = 0;

    // Function to create an image element
    function createImageElement(filename) {
        var img = document.createElement("img");
        img.src = imagePath + filename;
        img.loading = "lazy";
        return img;
    }

    // Function to display the current image
    function showImage() {
        // Clear existing images
        imageContainer.innerHTML = "";

        // Create and append the current image
        var img = createImageElement(imageFilenames[currentIndex]);
        img.classList.add("active");
        imageContainer.appendChild(img);
    }

    // Function to navigate to the previous or next image
    function navigate(direction) {
        currentIndex += direction;

        // Wrap around if at the beginning or end of the image array
        if (currentIndex < 0) {
            currentIndex = imageFilenames.length - 1;
        } else if (currentIndex >= imageFilenames.length) {
            currentIndex = 0;
        }

        // Show the new image
        showImage();
    }

    // Show the first image when the page loads
    showImage();

    // Create and set up the previous button
    var prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", function() {
        navigate(-1);
    });

    // Create and set up the next button
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", function() {
        navigate(1);
    });

    // Set fonts for navigation buttons
    prevButton.style.fontFamily = 'Predator0316-Sans';
    nextButton.style.fontFamily = 'Predator0316-Sans';

    // Append buttons to the container
    navButtonsContainer.appendChild(prevButton);
    navButtonsContainer.appendChild(nextButton);
});
