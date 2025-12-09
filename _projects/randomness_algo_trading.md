---
title: Randomness in Algorithm Trading - BSML
type: Research
status: completed
date: 2025-12-09
cover: /assets/img/black_bg.png
authors:
  - name: "Vincenzo Della Ratta"
    avatar: ""
    link: "https://www.linkedin.com/in/vincenzodellaratta/"
    desc: "Infrastructure, Pipeline, Backtesting"
  - name: "Preslav Georgiev"
    avatar: ""
    link: "#"
    desc: ""
  - name: "Matteo Roda"
    avatar: ""
    link: "#"
    desc: ""
  - name: "Rayi Makori"
    avatar: ""
    link: "https://www.linkedin.com/in/rayi-makori-3943b82b0/"
    desc: "Project Lead"
  - name: "Hunor Csenteri"
    avatar: ""
    link: "#"
    desc: ""
  - name: "Neel Roy"
    avatar: ""
    link: "#"
    desc: ""
  - name: "David Livshits"
    avatar: ""
    link: "#"
    desc: ""
---

## Abstract

Deterministic algorithmic execution strategies, while statistically efficient, are vulnerable to exploitation by adversaries who can infer and anticipate order flows.  
This project develops a framework for **stochastic execution policies** to defend against such adversarial learning dynamics.

We evaluate three randomization mechanisms:
- **Uniform randomization**
- **Ornstein–Uhlenbeck (OU)** mean-reverting noise
- **Pink (1/f)** spectral noise

using both:
- static machine-learning binary classifiers, and  
- regression-based adversaries predicting execution prices.

According to the paper’s main findings :
- OU policy reduces adversarial predictability by **27%** (AUC 0.78 → 0.57)  
- OU improves implementation shortfall by **14.8 bps**, driven by **10.6 bps decrease in adverse selection**  
- Portfolio Sharpe improves **19%** (0.94 → 1.12)  
- OU reaches adversarial safety in **5 iterations** (vs 15–20 for alternatives)  
- Estimated benefit: **$37M annual** at $100M daily execution volume  
- All policies satisfy strict exposure and turnover constraints during backtests

This establishes that adversarial robustness requires **dynamic, game-theoretic adaptation**, not static defense.


