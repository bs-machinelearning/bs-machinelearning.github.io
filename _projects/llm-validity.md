---
title: "LLM Validity via Enhanced Conformal Prediction: Conditional Guarantees, Score Learning, and Response-Level Calibration Under Dependent Claims"
type: Article
status: completed
date: 2026-02-07
cover: /assets/img/proj/llm_validity.png
header_image: /assets/img/proj/llm_validity_cropped.png
authors:
  - name: "Davide Beltrame"
    avatar: "/assets/img/team/davide_beltrame.jpg"
    link: "https://www.linkedin.com/in/davide-beltrame/"
    desc: "MSc in Artificial Intelligence"
---

Finite-sample validity guarantees for large language model (LLM) outputs are attractive because they are post-hoc and model-agnostic, but they are fragile when prompts are heterogeneous and factuality signals are noisy.

Cherian et al. (2024) propose enhanced conformal methods for *factuality filtering* that (i) replace marginal guarantees with function-class conditional guarantees and (ii) improve utility via level-adaptive calibration and conditional boosting that differentiates through conditional conformal cutoffs.

This discussion paper reviews the conformal prediction and LLM factuality context, presents the selected paper and proposes a future direction: *response-level conformalization under dependent claims*.
The key idea is to treat an entire response as the exchangeable unit, use blocked calibration that keeps all claims from a response together, and calibrate response-level tail losses conditionally on prompt/response features to align guarantees with user-facing risk when claim errors are dependent.

<div class="d-flex align-items-center justify-content-around">
  <a href="/assets/reports/llm_validity_paper.pdf" class="btn-custom">Full Paper</a>
  <a href="https://github.com/jjcherian/conformal-safety" class="btn-custom">Code (Conformal Safety)</a>
  <a href="https://github.com/jjcherian/conditional-conformal" class="btn-custom">Code (Conditional Conformal)</a>
</div>
<br>

**Notes:**
- This work is a discussion paper of Cherian et al. (2024).
- The authors released a [filtered `MedLFQA` benchmark](https://github.com/jjcherian/conformal-safety) with non-health-related prompts removed, as well as the generated/parsed text and experiment notebooks.
- Their [conditional conformal inference Python package](https://github.com/jjcherian/conditional-conformal) now supports level-adaptive conformal prediction.
