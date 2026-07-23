const releaseItems = {
  feature: [
    {
      title: "Google Calendar Connect",
      description:
        "Connect Google Calendar with EZHire to schedule interviews, manage appointments, and keep interview events automatically synced in one place.",
      ticket: "EH-119",
      stgUrl: "https://stg-ats.reeracoen.tech/en/companies/members/40/edit",
      ticketUrl: "https://abroaders.backlog.com/view/EH-119",
      image: "images/google-cld.png",
      imageAlt: "EZHire Google Calendar integration screen",
    },
  ],
  ux: [
    {
      title: "Fix Talent Pool Scoreboard",
      description:
        "Center the Talent Pool scoreboard so the metrics align cleanly within the dashboard card.",
      ticket: "EH-126",
      stgUrl: "https://stg-ats.reeracoen.tech/dashboard",
      ticketUrl: "https://abroaders.backlog.com/view/EH-126",
      image: "images/talent-pool-scoreboard.png",
      imageAlt: "EZHire dashboard showing the Talent Pool scoreboard card",
      showProd: false,
    },
    {
      title: "Search Improvement",
      description:
        "Improve the search experience with clearer filters and dynamically updated results.",
      ticket: "EH-136",
      stgUrl: "https://stg-ats.reeracoen.tech/en/jobs",
      ticketUrl: "https://abroaders.backlog.com/view/EH-136",
      image: "images/search-improvement.png",
      imageAlt: "EZHire jobs page showing improved search filters and dynamic results",
      showProd: false,
    },
  ],
  admin: [
    {
      title: "Bulk Job Close",
      description:
        "Add multi-select controls so admins can close multiple job items in one action.",
      ticket: "EH-135",
      ticketUrl: "https://abroaders.backlog.com/view/EH-135",
      image: "images/bulk-job-close.png",
      imageAlt: "Admin company members page showing selected rows for bulk job close actions",
      showProd: false,
    },
  ],
};

const issueTrend = [
  { month: "Jan", issues: 6 },
  { month: "Feb", issues: 30 },
  { month: "Mar", issues: 6 },
  { month: "Apr", issues: 7 },
  { month: "May", issues: 3 },
  { month: "Jun", issues: 9 },
  { month: "Jul", issues: 5 },
];

const issueDistribution = [
  { label: "Feature", issues: 1, color: "#DB6258" },
  { label: "UX/UI", issues: 2, color: "#E88981" },
  { label: "Admin", issues: 1, color: "#F2B4AF" },
];

const tabs = Array.from(document.querySelectorAll(".stat-card[data-tab]"));
const featureList = document.querySelector("#feature-list");
const issueChart = document.querySelector("#issue-chart");
const distributionChart = document.querySelector("#distribution-chart");
let activeTab = "feature";
let activeDistributionLabel = null;

function renderIssueChart() {
  const axis = issueChart.querySelector(".bar-chart__y-axis");
  const plot = issueChart.querySelector(".bar-chart__plot");
  const maxIssues = Math.max(...issueTrend.map((item) => item.issues));
  const tickStep = maxIssues > 10 ? 10 : 1;
  const axisMax = Math.ceil(maxIssues / tickStep) * tickStep;
  const tickCount = axisMax / tickStep;
  const ticks = Array.from(
    { length: tickCount + 1 },
    (_, index) => axisMax - index * tickStep,
  );

  axis.innerHTML = ticks.map((tick) => `<span>${tick}</span>`).join("");
  plot.innerHTML = issueTrend
    .map((item) => {
      const height = `${(item.issues / axisMax) * 100}%`;
      return `<button
        class="bar-chart__item"
        type="button"
        role="listitem"
        aria-label="${item.month}: ${item.issues} issues"
        style="--bar-height: ${height}; --bar-index: ${issueTrend.indexOf(item)}"
      >
        <span class="bar-chart__bar">
          <span class="bar-chart__tooltip">${item.issues} issues</span>
        </span>
        <span class="bar-chart__month">${item.month}</span>
      </button>`;
    })
    .join("");
}

function renderDistributionChart() {
  const total = issueDistribution.reduce((sum, item) => sum + item.issues, 0);
  const radius = 76;
  let startAngle = 0;

  function getArcPoint(angle) {
    const radians = (angle - 90) * (Math.PI / 180);
    return {
      x: 110 + radius * Math.cos(radians),
      y: 110 + radius * Math.sin(radians),
    };
  }

  function describeArc(start, end) {
    const startPoint = getArcPoint(start);
    const endPoint = getArcPoint(end);
    const largeArcFlag = end - start > 180 ? 1 : 0;

    return `M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPoint.x} ${endPoint.y}`;
  }

  const segments = issueDistribution
    .map((item) => {
      const segmentAngle = (item.issues / total) * 360;
      const midAngle = startAngle + segmentAngle / 2;
      const endAngle = startAngle + segmentAngle;
      const arcPath = describeArc(startAngle, endAngle);
      startAngle += segmentAngle;

      return `<path
        class="donut-chart__segment"
        data-label="${item.label}"
        data-issues="${item.issues}"
        data-angle="${midAngle}"
        style="--segment-index: ${issueDistribution.indexOf(item)}"
        d="${arcPath}"
        fill="none"
        stroke="${item.color}"
        stroke-width="40"
        pathLength="100"
        role="listitem"
        tabindex="0"
        aria-label="${item.label}: ${item.issues} issues"
      >
        <title>${item.label}: ${item.issues} issues</title>
      </path>`;
    })
    .join("");

  distributionChart.innerHTML = `<div class="donut-chart__graphic">
    <svg class="donut-chart__svg" viewBox="0 0 220 220" role="list" aria-label="Issue distribution by category">
      <circle cx="110" cy="110" r="${radius}" fill="none" stroke="#f6d7d4" stroke-width="40" />
      <g class="donut-chart__segments">
        ${segments}
      </g>
    </svg>
    <div class="donut-chart__center">
      <strong>${total}</strong>
      <span>Issues</span>
    </div>
    <div class="donut-chart__tooltip" aria-live="polite"></div>
  </div>`;

  bindDistributionChart();
}

function setDistributionReadout(segment) {
  const tooltip = distributionChart.querySelector(".donut-chart__tooltip");
  if (!segment) {
    tooltip.textContent = "";
    tooltip.classList.remove("is-visible");
    return;
  }

  const graphic = distributionChart.querySelector(".donut-chart__graphic");
  const angle = Number(segment.dataset.angle) * (Math.PI / 180);
  const radius = graphic.clientWidth * 0.39;
  const x = graphic.clientWidth / 2 + Math.sin(angle) * radius;
  const y = graphic.clientHeight / 2 - Math.cos(angle) * radius;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  tooltip.textContent = `${segment.dataset.label}: ${segment.dataset.issues}`;
  tooltip.classList.add("is-visible");
}

function getDistributionItemFromPoint(event) {
  const graphic = distributionChart.querySelector(".donut-chart__graphic");
  const rect = graphic.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = event.clientX - centerX;
  const dy = event.clientY - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const innerRadius = rect.width * 0.25;
  const outerRadius = rect.width * 0.48;

  if (distance < innerRadius || distance > outerRadius) return null;

  const total = issueDistribution.reduce((sum, item) => sum + item.issues, 0);
  const angle = (Math.atan2(dy, dx) * (180 / Math.PI) + 450) % 360;
  let currentAngle = 0;

  return issueDistribution.find((item) => {
    currentAngle += (item.issues / total) * 360;
    return angle <= currentAngle;
  });
}

function getDistributionSegment(label) {
  return distributionChart.querySelector(`.donut-chart__segment[data-label="${label}"]`);
}

function selectDistributionSegment(segment) {
  activeDistributionLabel = segment.dataset.label;
  distributionChart
    .querySelectorAll(".donut-chart__segment")
    .forEach((item) => item.classList.toggle("is-active", item === segment));
  setDistributionReadout(segment);
}

function bindDistributionChart() {
  const graphic = distributionChart.querySelector(".donut-chart__graphic");

  graphic.addEventListener("mousemove", (event) => {
    const item = getDistributionItemFromPoint(event);
    setDistributionReadout(item ? getDistributionSegment(item.label) : null);
  });
  graphic.addEventListener("click", (event) => {
    const item = getDistributionItemFromPoint(event);
    if (item) selectDistributionSegment(getDistributionSegment(item.label));
  });
  graphic.addEventListener("mouseleave", () => {
    setDistributionReadout(
      activeDistributionLabel ? getDistributionSegment(activeDistributionLabel) : null,
    );
  });

  distributionChart.querySelectorAll(".donut-chart__segment").forEach((segment) => {
    segment.addEventListener("mouseenter", () => setDistributionReadout(segment));
    segment.addEventListener("focus", () => setDistributionReadout(segment));
    segment.addEventListener("click", () => selectDistributionSegment(segment));
    segment.addEventListener("mouseleave", () => {
      const activeSegment = activeDistributionLabel
        ? distributionChart.querySelector(
            `.donut-chart__segment[data-label="${activeDistributionLabel}"]`,
          )
        : null;
      setDistributionReadout(activeSegment);
    });
    segment.addEventListener("blur", () => {
      const activeSegment = activeDistributionLabel
        ? distributionChart.querySelector(
            `.donut-chart__segment[data-label="${activeDistributionLabel}"]`,
          )
        : null;
      setDistributionReadout(activeSegment);
    });
  });
}

function createFeatureCard(item) {
  const imageMarkup = item.image
    ? `<div class="feature-card__image">
        <img src="${item.image}" alt="${item.imageAlt}" />
      </div>`
    : "";
  const prodMarkup =
    item.showProd === false
          ? ""
          : `<span class="pill pill--blue" aria-label="Production environment">
          <i class="ph ph-laptop" aria-hidden="true"></i>
          <span>Deployed</span>
        </span>`;
  const stgMarkup = item.stgUrl
    ? `<a class="pill pill--primary" href="${item.stgUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open staging URL">
          <i class="ph ph-link" aria-hidden="true"></i>
          <span>Stg URL</span>
        </a>`
    : "";
  const ticketMarkup = item.ticketUrl
    ? `<a class="pill pill--green" href="${item.ticketUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open ${item.ticket} ticket">
          <i class="ph ph-file-text" aria-hidden="true"></i>
          <span>${item.ticket}</span>
        </a>`
    : "";

  return `<article class="feature-card">
    <div class="feature-card__copy">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div class="feature-links">
        ${stgMarkup}
        ${ticketMarkup}
        ${prodMarkup}
      </div>
    </div>
    ${imageMarkup}
  </article>`;
}

function renderFeatureList(tabName) {
  featureList.innerHTML = releaseItems[tabName].map(createFeatureCard).join("");
}

function setActiveTab(tabName) {
  if (tabName === activeTab) return;

  activeTab = tabName;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("stat-card--active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  featureList.classList.add("feature-list--fading");
  window.setTimeout(() => {
    renderFeatureList(tabName);
    featureList.classList.remove("feature-list--fading");
  }, 160);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

renderIssueChart();
renderDistributionChart();
renderFeatureList(activeTab);
