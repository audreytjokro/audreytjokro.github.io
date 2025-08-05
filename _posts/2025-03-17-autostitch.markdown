---
layout: post
title: "Autostitch - Panorama Creation"
date: 2025-03-17 00:00:00 +0000
image: /images/autostitch-input-collage.png
hover-image: /images/autostitch-final-panorama.png
categories: Cornell
course: CS5670 Computer Vision
author: Audrey Tjokro
subtitle: Complete panorama pipeline with RANSAC alignment and advanced blending
# project-page: https://audreytjokro.github.io/projects/cs5670-project3-autostitch.html

---

Implemented a complete autostitch system that combines multiple overlapping photographs into seamless panoramic images. Built both translation-based alignment (with spherical warping for 360° panoramas) and homography-based alignment for planar scenes. I worked on algorithm implementation, pipeline optimization, and testing with both provided datasets (Campus, Yosemite) and original photography sequences.

**Key Implementation:** Complete pipeline including spherical coordinate transformation with radial distortion correction, robust RANSAC-based inter-image alignment, SVD-based homography estimation, and advanced feathering blends with drift correction for seamless composition.

**Technical Skills:** RANSAC robust estimation, projective geometry, spherical warping, homography mathematics, SVD applications, image blending algorithms
