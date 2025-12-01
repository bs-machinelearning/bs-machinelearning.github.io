---
title: "saLM-1"
date: 2025-05-25
type: Research
cover: /assets/img/proj/salmone.jpg
authors:
  - name: "Alessandro Bellini"
    avatar: ""
    link: "https://github.com/alefrabel"
  - name: "Riccardo Alberghi"
    avatar: "/assets/img/team/riccardo_alberghi.jpg"
    link: "https://www.linkedin.com/in/alberghir/"
  - name: "Matilde Dolfato"
    avatar: "/assets/img/team/matilde_dolfato.jpg"
    link: "https://www.linkedin.com/in/matilde-dolfato/"
  - name: "Luca Colaci"
    avatar: "/assets/img/team/luca_colaci.jpg"
    link: "https://www.linkedin.com/in/lucacolaci/"
  - name: "Flavio Caroli"
    avatar: "/assets/img/team/flavio_caroli.jpg"
    link: "https://www.linkedin.com/in/flavio-caroli-375359221/"
buttons:
  - name: "Code"
    link: "https://github.com/alefrabel/saLM-1"
  - name: "Report"
    link: "/assets/reports/250625_saLM_1.pdf"
---

This project investigates whether large language models can reliably judge when they are operating in-distribution and leverage that self-assessment to improve generation. We augment each base model with a lightweight head that estimates per-token suitability given the current context, and use those scores to route generation within an ensemble so that, at each step, the most competent model produces the next token.

Training forms a mixture over token distributions weighted by the self-assessment signals, while inference selects via argmax for deterministic routing. Evaluations across math and medical QA with 1B and 2.5B parameter families show that self-estimated confidence aligns with actual correctness, enabling adaptive, token-level specialization without heavy prompt engineering.

Results indicate that the ensemble matches or surpasses strong single specialists when domain expertise varies within an input, with gains more pronounced at 2.5B than at 1B. These findings suggest that calibrated self-assessment is a practical mechanism for robust decoding and context-aware model composition.