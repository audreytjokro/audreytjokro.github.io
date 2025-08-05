---
layout: post
title: "Training Diffusion Models from Scratch"
date: 2025-05-06 00:00:00 +0000
image: /images/old-man-static.png 
categories: Cornell
course: CS5670 Computer Vision
author: Audrey Tjokro
subtitle: UNet architectures, DDPM training, and class-conditioned generation on MNIST
# project-page: https://audreytjokro.github.io/projects/cs5670-project5b-training-diffusion.html
rotate-on-hover: true
---

Implemented and trained diffusion models from scratch on MNIST, progressing from single-step denoisers to full DDPM with class conditioning and classifier-free guidance. Built complete UNet architectures with time and class embedding for controlled generation. I got a chance to deep dive into generative model training from first principles, implementing both foundational algorithms and state-of-the-art techniques like CFG for controlled high-quality generation.

**Key Implementation:** UNet architecture with downsampling/upsampling paths and skip connections, DDPM mathematics with proper variance scheduling, time-conditioned generation with FCBlock embeddings, class-conditioned diffusion with one-hot encoding and conditional dropout, and classifier-free guidance for enhanced quality.

**Technical Skills:** Neural network architecture design, diffusion model mathematics, PyTorch training loops, DDPM sampling algorithms, conditional generation techniques
