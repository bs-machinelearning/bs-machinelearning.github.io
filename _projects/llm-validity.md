---
title: "LLM validity via enhanced conformal prediction: conditional guarantees, score learning, and response-level calibration under dependent claims"
type: Research
status: completed
date: 2026-02-07
cover: /assets/img/proj/llm_validity.png
header_image: /assets/img/proj/llm_validity_cropped.png
authors:
  - name: "Davide Beltrame"
    avatar: "/assets/img/team/davide_beltrame.jpg"
    link: "https://www.linkedin.com/in/davide-beltrame/"
    desc: "MSc in Artificial Intelligence"
buttons:
  - name: "Full Paper"
    link: "/assets/reports/llm_validity_paper.pdf"
  - name: "Code (Conformal Safety)"
    link: "https://github.com/jjcherian/conformal-safety"
  - name: "Code (Conditional Conformal)"
    link: "https://github.com/jjcherian/conditional-conformal"
---

Finite-sample validity guarantees for large language model (LLM) outputs are attractive because they are post-hoc and model-agnostic, but they are fragile when prompts are heterogeneous and factuality signals are noisy.

Cherian et al. (2024) propose enhanced conformal methods for *factuality filtering* that (i) replace marginal guarantees with function-class conditional guarantees and (ii) improve utility via level-adaptive calibration and conditional boosting that differentiates through conditional conformal cutoffs.

This discussion paper reviews the conformal prediction and LLM factuality context, presents the selected paper and proposes a future direction: *response-level conformalization under dependent claims*.
The key idea is to treat an entire response as the exchangeable unit, use blocked calibration that keeps all claims from a response together, and calibrate response-level tail losses conditionally on prompt/response features to align guarantees with user-facing risk when claim errors are dependent.

### Note on Discussion Paper

This work is a discussion paper of Cherian et al.

Cherian et al. released a [filtered version of the MedLFQA benchmark](https://github.com/jjcherian/conformal-safety) that removes some non-health-related prompts, the generated and parsed text used to run experiments, as well as the notebooks used to produce the figures.

They also updated their [Python package for conditional conformal inference](https://github.com/jjcherian/conditional-conformal) to support level-adaptive conformal prediction.
