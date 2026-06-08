---
layout: post
title: "Hybrid Images"
date: 2025-02-10 00:00:00 +0000
image: /images/hybrid-before.png
hover-image: /images/hybrid-after.png
categories: Cornell
course: CS5670 Computer Vision
author: Audrey Tjokro
subtitle: Creating images that change interpretation based on viewing distance
project-page: https://audreytjokro.github.io/projects/cs5670-project1-hybrid-images.html
---

Implemented image filtering functions from scratch to create hybrid images using the technique from the SIGGRAPH 2006 paper by Oliva, Torralba, and Schyns. Hybrid images are static images that change interpretation based on viewing distance - high frequencies dominate close viewing while low frequencies are visible from far away. I built 5 core functions from scratch (cross-correlation, convolution, Gaussian blur, high-pass, and low-pass filters) using only basic NumPy operations, no pre-built filtering libraries allowed.

**Technical Skills:** Python, NumPy, image processing, frequency domain analysis, spatial filtering

*Look at the image from very close and then very far. What do you see?*