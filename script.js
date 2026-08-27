// ==========================================
// SCENE NAVIGATION
// ==========================================

function nextScene(sceneNumber) {

    // Find all scenes
    const allScenes = document.querySelectorAll(".scene");

    // Hide every scene
    allScenes.forEach(function(scene) {
        scene.classList.remove("active");
    });

    // Find the scene we want to show
    const targetScene = document.getElementById(
        "scene-" + sceneNumber
    );

    // Show that scene
    if (targetScene) {
        targetScene.classList.add("active");
    }
}


// ==========================================
// OPEN THE ROYAL ENVELOPE
// ==========================================

function openEnvelope() {

    const envelope =
        document.getElementById("interactive-envelope");

    const instructionBox =
        document.getElementById("envelope-instruction");


    // Make sure the envelope exists
    if (!envelope) {
        return;
    }


    // Stop the gentle shaking animation
    envelope.classList.add("stop-animation");


    // Open the envelope
    envelope.classList.add("open");


    // Change the message underneath
    if (instructionBox) {

        instructionBox.innerHTML = `
            <p>
                The royal envelope opens, revealing your
                official invitation to Princess Aahana's
                grand celebration! ✨
            </p>
        `;

    }
} 