# Zeyad Hatem Atteya

Front-end developer and AI student building responsive, accessible, and interactive web experiences with React.

I enjoy turning complex ideas into clear interfaces, adding deliberate motion, and learning how intelligent behaviour can improve the products I design.

## Connect

- [GitHub](https://github.com/zeyadhatem00)
- [LinkedIn](https://www.linkedin.com/in/zeyad-hatem-569302390/)
- [Instagram](https://www.instagram.com/zeyad_hatem15/)
- [Email](mailto:zeyadhatem0079@gmail.com)

## Selected work

A few public projects from my portfolio:

| Project | Repository | Live demo |
| --- | --- | --- |
| Adasa | [zeyadhatem00/Adasa-](https://github.com/zeyadhatem00/adasa) | [Open demo](https://adasa-beta-amber.vercel.app) |
| Brace-up | [zeyadhatem00/Brace-up](https://github.com/zeyadhatem00/brace-up) | [Open demo](https://brace-up.vercel.app) |
| Vibely | [zeyadhatem00/Vibely-social-media-platform](https://github.com/zeyadhatem00/Vibely-social-media-platform) | [Open demo](https://vibely-navy.vercel.app) |
| Cartiva | [zeyadhatem00/Cartiva](https://github.com/zeyadhatem00/cartiva) | — |

The repository links above point to public projects from this account. The three demo links returned successfully when this README was prepared; availability can change independently of the source repositories.

## What I build

- React interfaces with responsive layouts and component-driven structure
- UI/UX with accessible interactions, visual hierarchy, and purposeful animation
- Front-end experiences using JavaScript, TypeScript, Tailwind CSS, and Vite
- Interactive portfolio and product surfaces with live public GitHub repository data

## This profile site

This repository contains the source for my personal portfolio site. It includes:

- About, skills, selected-work, experience, resume, and contact sections
- GitHub profile and repository loading through the public GitHub REST API
- Repository filtering by detected language
- GSAP and Lenis motion, smooth scrolling, responsive navigation, and a light/dark theme toggle
- An embedded viewer and download link for my [CV](./public/Zeyad_Hatem_Atteya_CV.pdf)

### Stack used here

- React and JSX, bundled with Vite
- Tailwind CSS through PostCSS
- GSAP, Lenis, Lucide React, and React Icons
- React PDF for the CV preview

### Runtime notes

- `VITE_GITHUB_USERNAME` can override the GitHub account queried by the site; without it, the code uses `zeyadhatem00`.
- The site requests the GitHub profile, public repositories, and profile README at runtime, so network access and GitHub API availability affect the Projects and About sections.
- The contact form validates fields in the browser and displays a temporary success state. It does not submit to a backend or send email.

The default branch for this repository is `main`.
