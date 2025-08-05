---
layout: post
title: "Automated Pneumonia Detection using Deep Learning"
date: 2024-12-15 00:00:00 +0000
image: /images/rsna-thumbnail.png
categories: Cornell
course: CS5785 Applied Machine Learning
author: Audrey Tjokro
subtitle: Comparative analysis of Faster R-CNN architectures for medical image classification
project-page: https://audreytjokro.github.io/projects/ccs5786-aml-project.html
---

This project explores automated pneumonia detection in chest X-rays using three distinct Faster R-CNN implementations with different backbone architectures and optimization strategies. Working with the RSNA Pneumonia Detection Challenge dataset containing over 26,000 chest X-ray images, we implemented and compared PyTorch Faster R-CNN with ResNet-50 and Adam optimizer, Faster R-CNN with ImageNet-pretrained ResNet-50, and PyTorch Faster R-CNN with ResNet-50-FPN and SGD optimizer.

**Key Implementation:** The three approaches leveraged different transfer learning strategies—COCO pretraining, ImageNet pretraining, and PyTorch default weights—combined with varying optimization techniques. Each method incorporated Region Proposal Networks (RPN) for pneumonia opacity localization and classification heads for binary pneumonia detection. The ImageNet-pretrained approach achieved the best validation accuracy of 76.81%, demonstrating superior generalization compared to COCO pretraining.

**Technical Skills:** Gained hands-on experience with object detection architectures, medical image preprocessing for DICOM files, transfer learning evaluation, and comparative deep learning analysis. Developed expertise in PyTorch implementation of Faster R-CNN variants, bounding box regression, and performance evaluation for medical imaging applications.

**Applied Machine Learning Course:** This final project for CS 5785 focused on practical application of advanced deep learning techniques to real-world healthcare challenges, emphasizing the importance of architecture selection and transfer learning in medical AI systems.