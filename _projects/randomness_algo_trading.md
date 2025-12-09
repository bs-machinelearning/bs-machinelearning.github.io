---
title: Randomness in Algorithm Trading
type: Research
status: completed
date: 2025-12-02
cover: /assets/img/proj/random_algo_0.png
authors:
  - name: "Rayi Makori*"
    avatar: "/assets/img/team/rayi_makori.jpeg"
    link: "https://www.linkedin.com/in/rayi-makori-3943b82b0"
    desc: "BSc in Economics and Computer Science"
  - name: "Vincenzo Della Ratta"
    avatar: ""
    link: "https://www.linkedin.com/in/vincenzodellaratta/"
    desc: "BSc in Economics and Finance"
  - name: "Preslav Georgiev"
    avatar: "/assets/img/team/preslav_georgiev.jpeg"
    link: "https://www.linkedin.com/in/preslav-georgiev-825bb7328"
    desc: "BSc in Economics and Computer Science"
  - name: "Matteo Roda"
    avatar: "/assets/img/team/matteo_roda.jpeg"
    link: "https://www.linkedin.com/in/matteo-roda-017796254/"
    desc: "MSc in Data Science"
  - name: "Hunor Csenteri"
    avatar: "/assets/img/team/hunor_csenteri.jpeg"
    link: "https://www.linkedin.com/in/hunor-csenteri"
    desc: "BSc in Economics and Finance"
  - name: "Neel Roy"
    avatar: "/assets/img/team/neel_roy.jpeg"
    link: "https://www.linkedin.com/in/neel-roy-338550292"
    desc: "BSc in Mathematical and Computing Sciences for AI"
  - name: "David Livshits"
    avatar: ""
    link: "https://www.linkedin.com/in/david-livshits-185354382"
    desc: "BSc in Economics and Computer Science"
---


Modern algorithmic trading strategies often rely on deterministic execution, which can be exploited by sophisticated adversaries who learn and anticipate order flows. This project tackles the challenge of making trading execution robust against such adversarial learning.

We introduce a novel framework for stochastic execution policies: instead of following predictable patterns, our approach injects carefully designed randomness into order execution. Among the randomization mechanisms explored, the Ornstein–Uhlenbeck (OU) mean-reverting noise stands out, significantly reducing adversarial predictability and improving trading performance.

Our results show that the OU-based policy not only makes execution harder to predict for adversaries, but also delivers tangible improvements in portfolio Sharpe ratio, all while maintaining strict risk controls. These findings highlight the power of dynamic, game-theoretic adaptation in algorithmic trading.

Curious how randomness can become a strategic edge in financial markets? Dive into the full paper for the complete methodology, experiments, and insights.

<div class="d-flex align-items-center justify-content-around">
  <a href="/assets/reports/randomness_algo_trading.pdf" class="btn-custom">Full Paper</a>
</div>
<br>
<div class="col-lg-12 d-flex justify-content-center event-gallery">
    <img src="/assets/img/proj/random_algo_1.png" style="max-width: 33%;" alt="" class="img-fluid">
    <img src="/assets/img/proj/random_algo_2.png" style="max-width: 33%;" alt="" class="img-fluid">
    <img src="/assets/img/proj/random_algo_3.png" style="max-width: 33%;" alt="" class="img-fluid">
</div>
