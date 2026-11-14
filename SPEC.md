# PROJECT: AN INTERACTIVE, EDITORIAL-QUALITY BIRTHDAY EXPERIENCE

## ROLE & EXPECTATIONS

Act as a senior frontend engineer, creative director, interaction designer, and UI/UX specialist at a high-end digital design studio.

Your task is to completely rebuild the existing website into a sophisticated, highly interactive, visually memorable birthday experience.

This is not a generic birthday landing page. It should feel like a carefully art-directed digital experience created by a professional design agency.

The final product should demonstrate:

- Exceptional visual hierarchy.
- Thoughtful typography and spacing.
- Restrained but delightful animations.
- Meaningful micro-interactions.
- Excellent responsive behavior.
- Clean, maintainable React architecture.
- Consistent visual language.
- Carefully implemented interactions.
- Attention to details that make the experience feel personal.

**The most important design principle: Simplicity is sophistication.**

Do not confuse visual quality with visual complexity.

Avoid unnecessary gradients, excessive floating decorations, random animations, oversized rounded cards, generic AI-generated layouts, and excessive use of pastel colors.

Every visual element must have a purpose.

---

# 1. PROJECT OBJECTIVE

Create a single-page interactive birthday website dedicated to someone who:

- Has an energetic, outgoing, and extroverted personality.
- Loves dogs and cats.
- Dreams of becoming a veterinarian.
- Loves chocolates.
- Enjoys funny memes, playful interactions, and visual entertainment.
- Prefers experiencing something interactive rather than reading long paragraphs.

The experience should communicate affection, humor, personality, and celebration without becoming childish or visually overwhelming.

Think of the website as a combination of:

- A premium editorial landing page.
- A playful interactive digital experience.
- A personalized birthday gift.
- A miniature interactive world that unfolds as the visitor explores it.

The website must be enjoyable even if someone spends only 30 seconds on it. However, it should contain enough interactive details to reward someone who explores every section.

## Creative direction

The overall experience should feel:

- Warm.
- Cheerful.
- Elegant.
- Playful.
- Personal.
- Slightly chaotic in the right places.
- Professionally designed.

The design should balance sophisticated minimalism with moments of unexpected humor.

Use visual contrast deliberately. Keep most sections clean and composed, then allow the meme interaction to become intentionally chaotic.

---

# 2. FIRST: INSPECT AND REBUILD THE EXISTING PROJECT

This is a complete website redesign.

Do not simply modify a few existing sections or apply a new theme to the old website.

First inspect the entire existing project:

1. Examine the existing folder structure.
2. Identify the framework, dependencies, entry points, and existing styling system.
3. Inspect all existing components and assets.
4. Identify reusable resources, if any.
5. Understand the existing application architecture.
6. Plan the new architecture before implementation.

Then rebuild the website from the ground up.

You have creative freedom to replace the existing frontend structure, components, styling, layouts, and interactions.

However:

- Do not unnecessarily delete project configuration files.
- Do not damage the existing development environment.
- Do not remove dependencies required by the project without understanding their purpose.
- Do not leave old website components or styles interfering with the new implementation.
- Remove obsolete code and unused assets when appropriate.
- Ensure that the final project runs independently and cleanly.

Do not start by generating random components. Establish the design system and application architecture first.

---

# 3. TECHNOLOGY STACK

Use the following technologies:

**Frontend**
- React.
- Vite.
- JavaScript (ES6+).
- Tailwind CSS.
- Framer Motion.

**Additional libraries**
- lucide-react: icons.
- react-confetti: celebration effects.
- @splinetool/react-spline: 3D integration.
- lottie-react: lightweight animated illustrations.

Use modern React functional components and hooks.

Avoid unnecessary dependencies.

Do not introduce TypeScript unless the existing project specifically requires it.

Do not use an additional component library simply to generate generic UI elements.

All components must be deliberately designed for this website.

## Architecture principles

- Component-based architecture.
- Reusable UI elements.
- Centralized configuration.
- Clear separation of concerns.
- Minimal unnecessary state.
- Predictable interaction logic.
- No duplicated styling.
- No unnecessarily complicated abstractions.

The code must be readable and maintainable by another frontend developer.

---

# 4. DESIGN SYSTEM & ART DIRECTION

This section is extremely important.

Establish a coherent design system before creating individual sections.

## 4.1 Color palette

Use a warm, sweet, cheerful palette.

Primary colors:

| Purpose | Color |
|---|---|
| Main background | #FFF5E1 |
| Primary accent | #FF9A8B |
| Secondary accent | #B5EAD7 |
| Chocolate brown | #3E2723 |
| White | #FFFFFF |
| Muted text | #8C756B |

Use the colors consistently.

Important guidelines:

- Cream should dominate the website.
- Chocolate brown should be the primary text color.
- Pink should be used for important accents and interactive elements.
- Mint green should be used sparingly for secondary details.
- White should provide contrast and breathing space.

Do not use every color everywhere.

The website must remain visually balanced.

## 4.2 Typography

Use Google Fonts.

Preferred combination:

- Fredoka: playful display headings.
- Nunito: readable body text and interface elements.

Use typography to establish hierarchy.

Headings should feel expressive without becoming excessively large.

Body text should remain readable, compact, and well-spaced.

Use a limited number of font weights.

Avoid using decorative fonts for long paragraphs.

## 4.3 Layout and spacing

Use a consistent spacing system.

- Establish a centered content container.
- Use generous horizontal whitespace.
- Maintain consistent section spacing.
- Avoid unnecessary nested cards.
- Avoid excessive border radii.
- Use a restrained shadow system.
- Keep the content width comfortable for reading.

Use a combination of:

- Full-width visual sections.
- Centered editorial layouts.
- Asymmetric compositions where appropriate.
- Small, carefully positioned illustrations.
- Strong typography.

Do not make every section look like a collection of cards.

## 4.4 Overall visual language

The website should feel custom-designed.

Avoid:

- Generic SaaS landing page layouts.
- Excessive glassmorphism.
- Excessive neumorphism.
- Random gradients.
- Unnecessary borders.
- Huge empty spaces without visual purpose.
- Repeated identical card layouts.
- Excessive emoji usage.
- Unnecessary animated blobs.
- Constantly moving backgrounds.
- Randomly scattered decorations.
- Default AI-generated website aesthetics.

Use animations to enhance the experience, not to compensate for weak design.

---

# 5. CENTRALIZED CONFIGURATION

Create:

`src/data/config.json`

All personalized content must originate from this file.

The website must be editable without requiring changes to individual React components.

Use the following configuration structure:

```json
{
  "name": "NAME_HERE",
  "age": null,
  "memes": [
    "/memes/1.jpg",
    "/memes/2.jpg",
    "/memes/3.jpg",
    "/memes/4.jpg",
    "/memes/5.jpg",
    "/memes/6.jpg",
    "/memes/7.jpg",
    "/memes/8.jpg",
    "/memes/9.jpg",
    "/memes/10.jpg"
  ],
  "prescriptionText": "Unlimited chocolates",
  "diagnosis": "Too Awesome",
  "birthdayMessage": "Another year of being wonderfully chaotic.",
  "themeColors": {
    "bg": "#FFF5E1",
    "primary": "#FF9A8B",
    "secondary": "#B5EAD7",
    "chocolate": "#3E2723",
    "white": "#FFFFFF",
    "muted": "#8C756B"
  },
  "content": {
    "heroSubtitle": "A little celebration for someone extraordinary.",
    "heroButton": "Make a Wish",
    "vetHeading": "Future Dr. in the Making",
    "memeHeading": "Enter at Your Own Risk",
    "memeButton": "DO NOT CLICK",
    "closingMessage": "Stay wonderful. Stay chaotic. Never stop being you."
  }
}
```

This file is the single source of truth for personalized content.

Requirements:

1. Import the configuration once through a centralized application data layer.
2. Pass the necessary values to components through props.
3. Never hardcode the recipient's name in individual components.
4. Never hardcode meme image paths.
5. Never duplicate the color palette throughout CSS files.
6. Ensure the website remains functional if optional fields are missing.
7. Validate the meme array before rendering the meme interaction.
8. Use sensible fallback values for optional configuration fields.

If you introduce additional personalized text, put it in this configuration file.

---

# 6. WEBSITE STRUCTURE

Build the experience as one continuous, single-page application.

The website should contain the following sections:

1. Hero — The Birthday Entrance.
2. Birthday Note — A Small Personal Moment.
3. Future Veterinarian — The Prescription.
4. Meme Vault — Controlled Chaos.
5. Final Surprise — A Sweet Ending.

Each section should have its own visual identity while maintaining the same design language.

The transitions between sections should feel natural.

Do not make the page look like five unrelated templates placed one after another.

---

# 7. SECTION A — THE HERO

## Concept: The Birthday Entrance

The hero is the first impression.

It should immediately communicate that something special has been created.

Use a full-viewport introductory section.

### Layout

Create a carefully balanced composition containing:

- A small introductory label.
- A prominent birthday heading.
- A short supporting sentence.
- A central 3D birthday cake.
- A primary interactive button.
- A subtle scroll indicator.

Suggested content:

Small label:

"A LITTLE SOMETHING FOR YOU"

Main heading:

"Happy Birthday, [Name]!"

Supporting text:

"Today, the world gets a little more wonderful."

Primary button:

"Make a Wish"

### Typography animation

Use Framer Motion.

Animate the heading letter by letter.

Animation behavior:

- Letters enter from above.
- Use a slight vertical translation.
- Use staggered delays.
- Add a subtle spring effect.
- Avoid exaggerated bouncing.
- Ensure the complete heading is readable during animation.

The animation should be smooth and elegant.

### 3D Birthday Cake

Use:

`@splinetool/react-spline`

Spline scene:

`https://prod.spline.design/qBvV8-UoQjZ-Zc3l/scene.splinecode`

The cake should serve as the visual centerpiece.

Requirements:

- Maintain its aspect ratio.
- Keep it properly positioned on desktop and mobile.
- Prevent overflow.
- Avoid obstructing the heading or buttons.
- Ensure the scene does not interfere with scrolling.
- Provide a graceful loading state.
- Provide a static visual fallback if Spline fails to load.
- Lazy-load the 3D scene where appropriate.

Do not assume that an external Spline URL will always work.

The application must remain visually complete even if the 3D resource is unavailable.

### Birthday interaction

The primary button should trigger a birthday celebration.

On interaction:

1. Trigger a confetti burst.
2. Use a custom palette of chocolate brown, pastel pink, mint, and gold.
3. Display a short celebratory message.
4. Allow the animation to finish naturally.
5. Prevent unnecessary repeated confetti rendering.
6. Provide a replay interaction if appropriate.

Use `react-confetti`.

The confetti must not interfere with other interface interactions.

Make the celebration feel rewarding without covering the entire website indefinitely.

---

# 8. SECTION B — THE BIRTHDAY NOTE

## Concept: A Small Personal Moment

This section provides a little emotional contrast before the playful veterinary section.

Do not introduce a long paragraph.

Use a short, beautifully typeset message.

Suggested design:

- A clean editorial layout.
- A small decorative illustration.
- A short personal message.
- A subtle entrance animation.

The message should be driven by `config.json`.

Keep this section visually quiet.

Its purpose is to slow down the experience for a moment.

Do not turn it into a generic inspirational quote section.

---

# 9. SECTION C — THE FUTURE VETERINARIAN

## Concept: The Official Veterinary Prescription

This section celebrates the recipient's dream of becoming a veterinarian.

The visual concept is an imaginary veterinary prescription issued specifically for the birthday recipient.

### Layout

Create a floating prescription-pad composition.

The prescription should resemble a professionally illustrated veterinary document.

It should include:

**Header**

VETERINARY DEPARTMENT

**Patient**

[Name from config.json]

**Diagnosis**

Too Awesome

**Treatment**

Unlimited Chocolates

**Additional Instructions**

- Continue being amazing.
- Pet every dog encountered.
- Provide unlimited affection to cats.
- Never stop chasing your dreams.
- Repeat birthday celebrations annually.

**Official Seal**

APPROVED BY THE CHOCOLATE AUTHORITY

### Visual design

The prescription should have:

- A warm paper-like background.
- A subtle paper texture, preferably implemented with CSS.
- Carefully aligned typography.
- A restrained border.
- A small veterinary icon.
- A signature or approval stamp.
- A subtle rotation.
- A realistic but lightweight shadow.

Avoid making it look like a generic white dashboard card.

### Animal illustrations

Use a cute dog-and-cat animation.

Use `lottie-react`.

Reference:

`https://assets3.lottiefiles.com/packages/lf20_syqnfe7c.json`

Requirements:

- Load the animation lazily.
- Keep it visually secondary to the prescription.
- Preserve aspect ratio.
- Provide a fallback illustration if the external asset fails.
- Do not allow the animation to cause layout shifts.

### Scroll animation

Use Framer Motion's `useInView`.

When the section enters the viewport:

- The prescription should appear with a slight upward movement.
- Its opacity should transition smoothly.
- The animal illustration should enter with a subtle delay.
- The individual prescription details may appear sequentially.

Do not animate every line excessively.

### Hover behavior

On desktop, the prescription may have a subtle rotation and elevation effect.

Keep the movement restrained.

On mobile, disable unnecessary hover-dependent interactions.

---

# 10. SECTION D — THE MEME VAULT

## Concept: Controlled Chaos

This is the most important interactive section of the entire website.

Unlike the rest of the website, this section is intentionally playful, unpredictable, and chaotic.

However, the underlying implementation must remain technically robust.

### Initial appearance

Display a clean section with:

A small label:

"WARNING: EXTREMELY UNSTABLE CONTENT"

A prominent heading:

"The Meme Vault"

Supporting text:

"Some things are better left untouched."

A large interactive button:

"DO NOT CLICK"

Optional smaller text:

"(Seriously. We warned you.)"

The initial layout should remain simple.

Do not reveal the memes before the interaction begins.

### Meme interaction architecture

Use React state:

`activeMemes`

Each active meme must be represented by an object rather than a plain image path.

Each object should contain:

- Unique ID.
- Image source.
- X coordinate.
- Y coordinate.
- Rotation.
- Z-index.
- Spawn order.

Generate coordinates within the visible boundaries of the meme interaction area.

Do not position memes relative to the entire browser window without considering the section's dimensions.

### Initial button interaction

When the user clicks "DO NOT CLICK":

1. Activate the meme sequence.
2. Add the first image from `config.json`.
3. Position it at a randomized location.
4. Animate it into view.
5. Change the initial button state to indicate that the chaos has started.

### Meme interaction

When the user clicks an already displayed meme:

- Spawn two additional memes.
- Choose the next unused images from the configuration.
- Give each meme an independent random position.
- Assign a small random rotation.
- Animate each meme into view.
- Allow the process to continue until all available memes have been displayed.

Important logic requirements:

1. Never spawn more memes than the configured number of images.
2. Never accidentally reuse an image unless intentionally supported.
3. Generate unique IDs for every rendered instance.
4. Prevent event bubbling from causing multiple unintended spawns.
5. Avoid duplicate state updates from rapid clicks.
6. Handle the case where fewer than ten images are configured.
7. Ensure that the interaction works with mouse, touch, and keyboard.
8. Do not allow memes to spawn outside the interaction container.
9. Ensure that the section remains usable on smaller screens.

### Meme visual design

Each meme should look like a small printed photograph.

Use:

- A white polaroid-style border.
- A subtle shadow.
- Slightly varied rotations.
- Natural image cropping.
- Smooth entrance animations.
- A visually clear clickable area.

The memes should overlap naturally.

Use Framer Motion.

### Drag interaction

Enable dragging using Framer Motion's `drag` functionality.

Requirements:

- Memes should be movable independently.
- Dragging must not automatically trigger the meme spawning action.
- The drag interaction must work on touch devices.
- Use appropriate drag constraints.
- Maintain a sensible stacking order when an item is selected.
- Prevent accidental page scrolling while dragging, without breaking normal scrolling elsewhere.

### Chaos completion

Once every configured meme has appeared:

Display:

"YOU HAVE OFFICIALLY LOST CONTROL."

Show a secondary button:

"CLEAR THE CHAOS"

When clicked:

1. Animate all memes out of the interaction area.
2. Clear the active meme state.
3. Reset the spawn counter.
4. Restore the initial interaction button.
5. Trigger a chocolate bar animation falling from the top.
6. Display a small message:

"Emergency chocolate supply delivered."

The chocolate animation should be implemented with a custom SVG or CSS illustration.

Do not rely on an external image for this small animation.

Ensure the user can repeat the entire experience without refreshing the page.

---

# 11. SECTION E — THE FINAL SURPRISE

## Concept: A Sweet Ending

After the meme section, create a simple closing section.

It should feel like the conclusion of a small digital journey.

Use:

A short heading:

"One Last Thing..."

A personalized message:

"Stay wonderful. Stay chaotic. Never stop being you."

A small chocolate-inspired illustration.

A final button:

"Celebrate Again"

This button should replay the birthday celebration.

Optionally provide a button that smoothly scrolls back to the top.

Keep the section elegant.

Do not introduce another complicated interaction just to fill space.

The final moment should leave the visitor smiling.

---

# 12. GLOBAL INTERACTIONS & MICRO-INTERACTIONS

Every interaction must have a consistent motion language.

Use Framer Motion for meaningful UI animations.

## Buttons

All buttons should have:

- Smooth hover transitions.
- A subtle scale effect.
- A slight rotation where appropriate.
- A visible active state.
- Clear focus indicators.
- Keyboard accessibility.

Do not apply aggressive `scale-110` and rotation to every button indiscriminately.

Prefer subtle movements such as:

- Scale: 1.02–1.05.
- Rotation: approximately 1–2 degrees.
- Short transition durations.
- Smooth spring physics.

Primary buttons should be visually distinct from secondary buttons.

## Custom cursor

Create a custom cursor component using an SVG paw-print illustration.

Requirements:

- Hide the default cursor only on devices that support fine pointer input.
- Track mouse coordinates.
- Smoothly animate the cursor's position.
- Display a small paw print.
- Add a subtle trail effect.
- Generate a new trail mark after approximately 100 pixels of cursor movement.
- Fade trail marks out over approximately one second.
- Remove expired trail elements from the DOM.
- Avoid creating an unlimited number of DOM nodes.
- Disable the custom cursor on touch devices.
- Respect reduced-motion preferences.

The custom cursor must never interfere with clicking or selecting text.

Use `pointer-events: none`.

Do not use a custom cursor as the only indication of an interactive element.

## Floating animal illustrations

Create a subtle background animation using Lucide icons:

- Cat.
- Dog.

The icons should occasionally float upward.

Requirements:

- Use low opacity.
- Vary their size and speed slightly.
- Avoid blocking content.
- Use a controlled spawning interval.
- Clean up timers and animation elements.
- Do not generate an unlimited number of icons.
- Avoid excessive activity on mobile devices.
- Respect reduced-motion settings.

These illustrations should remain background decoration, not the primary focus.

---

# 13. RESPONSIVE DESIGN

The website must be fully responsive.

Do not simply shrink the desktop layout to fit a mobile screen.

Design intentionally for:

- Large desktop screens.
- Standard laptops.
- Tablets.
- Mobile phones.

## Desktop

- Use balanced editorial layouts.
- Allow asymmetric compositions.
- Keep the 3D centerpiece prominent.
- Use generous whitespace.
- Allow the meme interaction to use the available container dimensions.

## Tablet

- Reduce oversized spacing.
- Adjust illustration sizes.
- Prevent overlapping content.
- Keep the prescription readable.
- Recalculate meme positions based on container dimensions.

## Mobile

Mobile is equally important.

Requirements:

- Use a single-column layout where appropriate.
- Keep the birthday heading readable.
- Scale the Spline scene appropriately.
- Prevent horizontal overflow.
- Keep buttons comfortably touchable.
- Make the prescription readable without excessive zooming.
- Ensure the meme interaction works with touch.
- Avoid fixed-position decorations that cover content.
- Disable the custom cursor.
- Reduce background animations.
- Ensure that the final section is properly spaced.

Test at widths around:

- 360px.
- 390px.
- 430px.
- 768px.
- 1024px.
- 1440px.

There must be no accidental horizontal scrolling at any breakpoint.

---

# 14. ACCESSIBILITY

The website should follow practical accessibility standards.

Implement:

- Semantic HTML.
- Appropriate heading hierarchy.
- Descriptive button labels.
- Alternative text for meaningful images.
- Keyboard-operable interactions.
- Visible keyboard focus.
- Appropriate color contrast.
- Accessible interactive controls.
- Reduced-motion support.
- Correct button and image semantics.

For the meme interaction, make sure a keyboard user can activate the meme-spawning functionality.

Do not make interactions dependent exclusively on hover.

Decorative illustrations should be hidden from screen readers when appropriate.

---

# 15. PERFORMANCE & RELIABILITY

The website should load quickly and behave consistently.

Implement:

- Lazy loading for non-critical assets.
- Appropriate image dimensions.
- Image loading fallbacks.
- Spline loading fallback.
- Lottie loading fallback.
- React component cleanup.
- Proper event-listener cleanup.
- Efficient animation rendering.
- Stable React keys.
- Avoidance of unnecessary re-renders.
- Proper handling of asynchronous assets.

Use CSS transforms and opacity for animations whenever possible.

Avoid excessive use of expensive layout animations.

Do not load every meme image immediately if it is not needed.

Avoid unnecessary network requests.

External assets must fail gracefully.

The website must remain usable if Spline or Lottie is unavailable.

---

# 16. CUSTOM STYLING & ANIMATION GUIDELINES

Create a centralized styling system.

Use Tailwind CSS for layout, spacing, responsive behavior, and reusable styling.

Use custom CSS for:

- Font imports.
- Global typography.
- Custom cursor.
- Paper texture.
- Paw trail.
- Chocolate SVG animation.
- Special visual effects.
- Custom scrollbar, if appropriate.
- Background animation.

Use Framer Motion for:

- Section entrances.
- Heading animations.
- Hover interactions.
- Meme spawning.
- Meme dragging.
- Celebration transitions.
- Closing animations.

Avoid writing complicated CSS animations when Framer Motion is more appropriate, and avoid using Framer Motion for simple static styling.

Keep animations consistent throughout the application.

---

# 17. SUGGESTED PROJECT STRUCTURE

Organize the project approximately as follows:

```text
birthday-website/
│
├── public/
│   ├── memes/
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   ├── 5.jpg
│   │   ├── 6.jpg
│   │   ├── 7.jpg
│   │   ├── 8.jpg
│   │   ├── 9.jpg
│   │   └── 10.jpg
│   │
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── FloatingAnimals.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BirthdayNote.jsx
│   │   ├── VetCard.jsx
│   │   ├── MemeVault.jsx
│   │   ├── MemeCard.jsx
│   │   ├── ChocolateAnimation.jsx
│   │   └── FinalSurprise.jsx
│   │
│   ├── data/
│   │   └── config.json
│   │
│   ├── hooks/
│   │   └── useReducedMotionPreference.js
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

You may adjust the structure if there is a clear engineering reason.

Do not create unnecessary files simply to make the folder structure look sophisticated.

---

# 18. IMPLEMENTATION REQUIREMENTS

The implementation must be complete.

Do not produce mockups without functional interactions.

Do not produce static screenshots in place of actual React components.

Do not write pseudocode.

Do not leave TODO comments.

Do not leave incomplete functions.

Do not use placeholder handlers.

Do not leave comments such as:

- "Implement later."
- "Add logic here."
- "Connect this later."
- "Insert animation here."

Every interaction described in this specification must work.

All buttons must perform their advertised actions.

All sections must be connected within the same SPA.

The application must have a functional Vite entry point.

Make sure the project builds successfully.

---

# 19. REQUIRED IMPLEMENTATION ORDER

Follow this order.

### Phase 1 — Project inspection and planning

- Inspect the existing project.
- Identify its dependencies and configuration.
- Establish the new component architecture.
- Establish the visual design system.

### Phase 2 — Foundation

- Set up the application structure.
- Implement the global configuration.
- Implement global CSS.
- Implement typography.
- Implement responsive layout primitives.
- Establish reusable animation settings.

### Phase 3 — Core sections

Build:

1. Hero.
2. Birthday Note.
3. Veterinary Prescription.
4. Meme Vault.
5. Final Surprise.

### Phase 4 — Interactions

Implement:

- Birthday celebration.
- Custom cursor.
- Paw trail.
- Floating animals.
- Scroll animations.
- Meme spawning.
- Meme dragging.
- Chaos reset.
- Chocolate animation.
- Replay functionality.

### Phase 5 — Responsive optimization

Test every section across the specified screen sizes.

### Phase 6 — Final quality assurance

Verify:

- No console errors.
- No missing assets.
- No broken imports.
- No horizontal overflow.
- No broken interactions.
- No duplicate meme spawning.
- No infinite animation loops.
- No memory leaks from event listeners or timers.
- No inaccessible interactive elements.
- No build errors.

Do not claim something has been tested unless it has actually been tested.

---

# 20. FINAL DESIGN QUALITY REQUIREMENTS

These are non-negotiable.

**1. It must not look AI-generated.**

Do not use generic templates or repetitive AI-generated design patterns.

Every section should feel intentionally art-directed.

**2. It must not look childish.**

The recipient may love cute animals and playful content, but that does not mean the entire website should look like a children's game.

Use sophisticated composition with playful details.

**3. It must not look cluttered.**

Whitespace is intentional.

Do not fill every empty area with icons, stickers, animations, gradients, or decorations.

**4. It must not look like a conventional portfolio or SaaS website.**

This is a personalized birthday experience.

Its design should be distinctive.

**5. Interactions must be meaningful.**

Do not animate things just because Framer Motion is installed.

Each interaction should have a clear purpose.

**6. Visual consistency matters.**

Buttons, headings, illustrations, cards, spacing, and animations must follow a unified design system.

**7. The meme section is the exception.**

This is where the website can deliberately become chaotic, humorous, and unpredictable.

The rest of the website must remain composed.

**8. Quality over quantity.**

A few exceptional details are better than fifty mediocre effects.

---

# 21. FINAL DELIVERABLES

Complete the actual implementation inside the project.

Do not just explain how someone could build it.

Provide the complete working source code.

Ensure the following are implemented and available:

1. `tailwind.config.js`
2. `src/data/config.json`
3. `src/App.jsx`
4. `src/main.jsx`
5. `src/components/Cursor.jsx`
6. `src/components/FloatingAnimals.jsx`
7. `src/components/Hero.jsx`
8. `src/components/BirthdayNote.jsx`
9. `src/components/VetCard.jsx`
10. `src/components/MemeVault.jsx`
11. `src/components/MemeCard.jsx`
12. `src/components/ChocolateAnimation.jsx`
13. `src/components/FinalSurprise.jsx`
14. `src/styles/index.css`
15. `index.html`
16. `package.json`
17. `README.md`

Include every required import, dependency, stylesheet, configuration, and implementation detail.

The README must explain:

- How to install dependencies.
- How to start the development server.
- How to change the recipient's name.
- How to replace the meme images.
- How to customize the color palette.
- How to change the birthday message.
- How to build for production.
- How to deploy on Vercel.

Configure Vercel deployment correctly, including SPA routing if necessary.

---

# FINAL CREATIVE DIRECTION

Imagine a small, highly talented digital design studio has been commissioned to create a birthday website for someone special.

The studio has a limited visual vocabulary, an excellent understanding of typography, exceptional attention to detail, and a strong sense of humor.

They do not add effects simply to impress.

They create an experience that feels effortless, personal, and memorable.

That is the standard.

**Build something that looks like it was designed, not generated.**

Keep it minimalistic. Keep it beautiful. Make the interactions delightful. Make the chaotic parts genuinely fun.

And above all, make the finished website feel like a gift rather than a coding experiment.