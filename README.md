# Interactive Birthday Invitation

## About the Project

My little sister's birthday was coming up, and I wanted to create something more meaningful than a traditional birthday card. I wanted to take the things she loves and turn them into an interactive experience made specifically for her.

She loves cats, so I included a cat as part of the story. I chose colors based on colors she loves, and because she loves Cinderella, I designed the princess with inspiration from Cinderella while still making the character feel connected to my sister.

I also took inspiration from her imagination and turned those ideas into a personalized birthday invitation.

What started as a birthday gift became a project that allowed me to combine **art, design, storytelling, and computer science**.

---

## What I Created

I built an interactive birthday invitation website where the user moves through different scenes instead of simply opening a static invitation.

The experience includes:

* An opening scene
* A story introducing the invitation
* A messenger character
* An interactive royal envelope
* A personalized invitation card
* Birthday information including the title, name, date, and celebration details
* A final celebration scene
* Animated elements and scene transitions

The goal was to make the invitation feel more like a small interactive story than a normal digital card.

---

## How I Designed It

I used **Canva** to create and edit many of the visual assets used in the project.

I worked on:

* Characters
* Backgrounds
* Colors
* The royal envelope
* The invitation card
* Transparent image elements
* Different visual compositions

I wanted the visual style to feel consistent throughout the entire experience.

This part of the project allowed me to bring my interest in **art and visual design** into a computer science project.

---

## How I Built It

The website was built using:

* **HTML** — Structure and content
* **CSS** — Styling, positioning, animations, and visual effects
* **JavaScript** — Interactions, scene navigation, and the envelope interaction
* **GitHub** — Version control and hosting
* **GitHub Pages** — Publishing the website online

I organized the website so that each scene could be shown or hidden depending on what the user does.

For example, JavaScript controls the transition between scenes:

```javascript
function nextScene(sceneNumber) {
    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(scene) {
        scene.classList.remove("active");
    });

    const targetScene = document.getElementById("scene-" + sceneNumber);

    if (targetScene) {
        targetScene.classList.add("active");
    }
}
```

This allows the website to change scenes without opening a completely new webpage.

---

## The Interactive Envelope

One of the main interactive elements is the royal envelope.

I wanted the invitation to be something the user discovers rather than something that immediately appears.

The envelope uses HTML for its structure, CSS for its appearance and animation, and JavaScript to respond to the user's interaction.

This helped me understand how different parts of a website can work together to create an interactive experience.

---

## The Invitation Card

The invitation card contains the important birthday information, including:

* Birthday title
* Name
* Date
* Celebration information
* Personalized invitation message

I designed the card separately and then incorporated it into the website so it could become part of the story.

---

## What I Learned From CS50

I am currently learning computer science through **CS50**, and this project gave me a chance to apply what I have been learning to something I created myself.

Rather than making the project only as an assignment, I used programming concepts to solve a real problem:

**How can I turn an idea for a personalized birthday experience into an actual interactive website?**

While building it, I practiced:

* Programming logic
* HTML structure
* CSS styling
* JavaScript functions
* Event interactions
* File organization
* Debugging
* Testing
* Publishing a website

I also learned that programming involves a lot of problem-solving. Images did not always appear correctly, files sometimes needed to be replaced, and changes sometimes did not immediately appear on the published website.

Working through those problems helped me become more comfortable with debugging and troubleshooting.

---

## Why I Made This

This project is personal to me because it was created for my sister.

I wanted to make something that reflected **who she is and what she likes**, rather than using a generic birthday template.

At the same time, the project allowed me to explore how my different interests can work together.

**Art** helped me create the visual world.

**Storytelling** helped me decide how the experience should unfold.

**Computer science** allowed me to turn that idea into something interactive.

The project showed me that technology can be a way to express creativity, not just a way to solve technical problems.

---

## What This Project Represents

This project represents one of my first attempts at combining my creative and technical interests into one complete project.

I designed the visuals, planned the experience, wrote and organized the code, tested the interactions, debugged problems, and published the finished website.

It started with a simple question:

> How can I make my sister a birthday invitation she will remember?

The answer became an interactive website built around her interests and my own creativity.

**A birthday invitation became a small piece of interactive art built with code.**

---

## Future Improvements

If I continue developing this project, I would like to:

* Add more interactive animations
* Improve mobile responsiveness
* Add more personalized interactions
* Create additional scenes
* Improve accessibility
* Continue improving the visual design
* Experiment with more advanced JavaScript interactions

---

## Project Skills

**Creative Skills**

* Digital design
* Visual storytelling
* Canva
* Composition
* Character and scene design

**Technical Skills**

* HTML
* CSS
* JavaScript
* GitHub
* GitHub Pages
* Debugging
* Problem-solving

**Learning**

* CS50
* Web development
* Interactive design
* Project development
