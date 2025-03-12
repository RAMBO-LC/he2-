# HealthyBites - Personalized Nutrition Website

A modern, responsive website for a personalized healthy food business, featuring creative scroll animations and a beautiful UI.

## Features

- Fully responsive design that works on all devices
- Modern UI with smooth scroll effects and animations
- Interactive elements including testimonial sliders and contact forms
- Mobile-friendly navigation with hamburger menu

## File Structure

```
.
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript with animations and interactions
├── img/                    # Directory for images (needs to be created)
│   ├── hero-bg.jpg
│   ├── hero-food.jpg
│   ├── about-img.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   └── testimonial-3.jpg
└── README.md               # This file
```

## Getting Started

1. **Create the img folder**: You'll need to create a folder named `img` and add appropriate images for the website.

2. **Required Images**:
   - `hero-bg.jpg`: A background image for the hero section (healthy food or cooking scene)
   - `hero-food.jpg`: Featured image for the hero section
   - `about-img.jpg`: Image for the about section (chef or cooking scene)
   - `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`: Profile images for testimonials

3. **Launch the website**: Open the `index.html` file in a web browser to view the website.

## Customization

### Colors

The website uses CSS variables for easy color customization. You can modify the colors in the `:root` section of `style.css`:

```css
:root {
    --primary: #22c55e;       /* Main green color */
    --primary-light: #4ade80; /* Light green */
    --primary-dark: #16a34a;  /* Dark green */
    /* Additional colors... */
}
```

### Content

To change the website content, simply edit the text within the HTML file (`index.html`).

### Adding More Sections

To add new sections, follow the structure of existing sections in the HTML file and make sure to add appropriate CSS styles and JavaScript functionality as needed.

## Scroll Animations

The website includes several types of scroll animations:

1. **Fade-in animations**: Elements with the class `animate-on-scroll` will fade in when they enter the viewport.

2. **Parallax effects**: Elements with the class `parallax-box` will move at different speeds while scrolling.

3. **Navigation highlighting**: The navigation menu automatically highlights the current section while scrolling.

## Browser Compatibility

This website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is free to use for personal and commercial purposes.

## Credits

- Font Awesome for icons
- Google Fonts for typography (Playfair Display and Poppins fonts)
- Vanilla JavaScript for all animations and interactions 