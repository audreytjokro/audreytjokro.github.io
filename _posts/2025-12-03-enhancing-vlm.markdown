---
layout: post
title: "Enhancing Video Vision-Language Models for Camera and Scene Understanding"
date: 2025-12-03 00:00:00 +0000
image: /images/dl-header.png
# hover-image: /images/vlm-camera-after.gif
categories: Cornell
course: Deep Learning
author: Audrey Tjokro
subtitle: Improving VLM camera-motion interpretation and scene understanding through in-context learning
# project-page: https://audreytjokro.github.io/projects/vlm-camera-scene-understanding.html
paper: /pdfs/dl-paper.pdf
---

Explored how **video vision-language models (V-VLMs)** understand **camera motion** and **scene geometry**, a persistent weakness in modern multimodal systems. While models like GPT-4o and Gemini 2.5 Pro recognize semantic content well, they often misinterpret egomotion—confusing pans, zooms, and translations for incorrect scene changes.

Our project investigates whether **in-context learning (ICL)** can serve as a lightweight, training-free method to improve motion reasoning and temporal grounding. Using **Qwen2.5-VL** and **CameraBench**, we designed structured prompts and exemplar-based templates that guide the model toward more geometrically consistent interpretations.

**Key Implementation:** Built an ICL prompting pipeline for motion-aware descriptions, evaluated across CameraBench tasks (rotation, translation, parallax, zoom), and analyzed improvements in consistency, directional accuracy, and scene understanding. Demonstrated that carefully designed prompts can significantly reduce hallucinations and improve a V-VLM’s grasp of real camera dynamics.

**Technical Skills:** Vision-language modeling, video understanding, in-context learning, geometric reasoning, prompt engineering, multimodal evaluation, error analysis, temporal scene representations.