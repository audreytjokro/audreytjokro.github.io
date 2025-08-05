---
layout: post
title: "Feature Detection and Matching"
date: 2025-02-28 00:00:00 +0000
image: /images/feature-original.jpg
hover-image: /images/feature-harris.png
categories: Cornell
course: CS5670 Computer Vision
author: Audrey Tjokro
subtitle: Harris corners, MOPS descriptors, and robust matching algorithms
project-page: https://audreytjokro.github.io/projects/cs5670-project2-feature-detection.html
---

Implemented Harris corner detection, feature description using simple and MOPS descriptors, and feature matching algorithms to identify corresponding points between images with differences in position, orientation, and illumination. I worked on the algorithm design, implementation testing, and benchmark evaluation using the Yosemite dataset for systematic performance comparison. I built the following from scratch: Harris corner detector with structure tensor analysis, rotation-invariant MOPS descriptors using affine transformations, and robust ratio test matching that outperformed simple SSD distance.

**Technical Skills:** Computer vision algorithms, Harris matrix mathematics, affine transformations, ROC analysis, feature invariance