---
layout: post
title: "Adversarial Multi-Turn Dynamics: Red-Teaming Clinical LLMs with RLHF"
date: 2026-05-01 22:21:59 +00:00
image: /images/Red-teaming-agent-diagram.png
categories: Cornell
course: "CS5788: Generative Models"
author: Audrey Tjokro, Stephen Dong, Niki Karanikola
# project-page: 
paper: /pdfs/adversarial-clinical-llms.pdf

---

Using Reinforcement Learning with Human Feedback, we propose training autonomous Red-Teaming Agents and comparing the efficacy of two distinct alignment algorithms: Proximal Policy Optimization (PPO) and Direct Preference Optimization (DPO). Our agents will iteratively converse with a target clinical LLM within a strict 5-turn limit. By optimizing the attacker policies to maximize the target model's generation of harmful clinical content, we aim to systematically expose and analyze multi-turn vulnerabilities that break through current safety benchmarks. 