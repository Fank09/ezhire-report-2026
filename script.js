const milestones = [
  {
    id: "2026-07-23",
    label: "July 23, 2026",
    issueTrend: [
      { month: "Jan", issues: 6 },
      { month: "Feb", issues: 30 },
      { month: "Mar", issues: 6 },
      { month: "Apr", issues: 7 },
      { month: "May", issues: 3 },
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 1, color: "#DB6258" },
      { label: "UX/UI", issues: 2, color: "#E88981" },
      { label: "Admin/Backend", issues: 1, color: "#F2B4AF" },
    ],
    // Feature cards shown in the "Cycle Release Issues" section.
    releaseItems: {
      // Feature tab cards.
      feature: [
        // Google Calendar Connect card.
        {
          title: "Google Calendar Connect",
          description:
            "Connect Google Calendar with EZHire to schedule interviews, manage appointments, and keep interview events automatically synced in one place.",
          ticket: "EH-119",
          showBadge: true,
          stgUrl: "https://stg-ats.reeracoen.tech/en/companies/members/40/edit",
          ticketUrl: "https://abroaders.backlog.com/view/EH-119",
          image: "images/23-7-2026/google-cld.png",
          imageAlt: "EZHire Google Calendar integration screen",
        },
      ],
      // UX/UI tab cards.
      ux: [
        // Fix Talent Pool Scoreboard card.
        {
          title: "Fix Talent Pool Scoreboard",
          description:
            "Center the Talent Pool scoreboard so the metrics align cleanly within the dashboard card.",
          ticket: "EH-126",
          showBadge: false,
          stgUrl: "https://stg-ats.reeracoen.tech/dashboard",
          ticketUrl: "https://abroaders.backlog.com/view/EH-126",
          image: "images/23-7-2026/talent-pool-scoreboard.png",
          imageAlt: "EZHire dashboard showing the Talent Pool scoreboard card",
        },
        // Search Improvement card.
        {
          title: "Search Improvement",
          description:
            "Improve the search experience with clearer filters and dynamically updated results.",
          ticket: "EH-136",
          showBadge: false,
          stgUrl: "https://stg-ats.reeracoen.tech/en/jobs",
          ticketUrl: "https://abroaders.backlog.com/view/EH-136",
          image: "images/23-7-2026/search-improvement.png",
          imageAlt: "EZHire jobs page showing improved search filters and dynamic results",
        },
      ],
      // Admin tab cards.
      admin: [
        // Bulk Job Close card.
        {
          title: "Bulk Job Close",
          description:
            "Add multi-select controls so admins can close multiple job items in one action.",
          ticket: "EH-135",
          ticketUrl: "https://abroaders.backlog.com/view/EH-135",
          image: "images/23-7-2026/bulk-job-close.png",
          imageAlt: "Admin company members page showing selected rows for bulk job close actions",
        },
      ],
    },
  },
  {
    id: "2026-08-06",
    label: "August 6, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 3 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 1, color: "#DB6258" },
      { label: "UX/UI", issues: 1, color: "#E88981" },
      { label: "Admin/Backend", issues: 1, color: "#F2B4AF" },
    ],
    // Feature cards shown in the "Cycle Release Issues" section.
    releaseItems: {
      // Feature tab cards.
      feature: [
        // Bulk Candidate Close card.
        {
          title: "Bulk Candidate Close",
          description:
            "feature that allows users to close multiple candidates at once",
          ticket: "EH-137",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/selection_processes?selection_process_display=open",
          ticketUrl: "https://abroaders.backlog.com/view/EH-137",
          image: "images/06-8-2026/bulk-cdd-close.png",
          imageAlt: "Bulk Candidate Close",
        },
        // Synced with Job Topgun card.
        {
          title: "Synced with Job Topgun",
          description:
            "feature that allows users to close multiple candidates at once",
          ticket: "EH-134",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/selection_processes?selection_process_display=open&source=jobtopgun",
          ticketUrl: "https://abroaders.backlog.com/view/EH-134",
          image: "images/06-8-2026/job-topgun.png",
          imageAlt: "Synced with Job Topgun",
        },
        // DPA & TOU card.
        {
          title: "Update DPA and ToU",
          description:
            "Update Data Processing Agreement (DPA) and Terms of Use (ToU) for expansion to other countries",
          ticket: "EH-143",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/dashboard",
          ticketUrl: "https://abroaders.backlog.com/view/EH-143",
          image: "images/06-8-2026/dpa-tou.png",
          imageAlt: "Update DPA and ToU",
        },
      ],
      // UX/UI tab cards.
      ux: [
        // All/Ongoing Filter card.
        {
          title: "All/Ongoing Filter on Dashboard",
          description:
            "feature that allows users to filter all or ongoing items on the dashboard",
          ticket: "EH-130",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/dashboard",
          ticketUrl: "https://abroaders.backlog.com/view/EH-130",
          image: "images/06-8-2026/filter-dashboard.png",
          imageAlt: "All/Ongoing Filter on Dashboard",
        },
      ],
      // Admin tab cards.
      admin: [
        // Retention for Log Data card.
        {
          title: "Retention for Log Data",
          description:
            "Automatically log view and export events on candidate data, capturing: who (user/account), when (timestamp), what (which candidate record).",
          ticket: "EH-133",
          showBadge: true,
          stgUrl: " ",
          ticketUrl: "https://abroaders.backlog.com/view/EH-133",
          image: "images/06-8-2026/log-data.png",
          imageAlt: "Retention for Log Data",
        },
      ],
    },
  },
  {
    id: "2026-08-20",
    label: "August 20, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 5 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 0, color: "#DB6258" },
      { label: "UX/UI", issues: 0, color: "#E88981" },
      { label: "Admin/Backend", issues: 0, color: "#F2B4AF" },
    ],
    // Feature cards shown in the "Cycle Release Issues" section.
    releaseItems: {
      // Feature tab cards.
      feature: [
        // Automated creation and filling by dropping resume
        {
          title: "Automated creation and filling by dropping resume",
          description:
            "Upload a candidate’s resume to automatically extract and pre-fill talent information, making it faster and easier to add new candidates to the system.",
          ticket: "EH-155",
          showBadge: false,
          stgUrl: "https://stg.ezhire.asia/en/talents/new",
          ticketUrl: "https://abroaders.backlog.com/view/EH-155",
          image: "images/20-8-2026/drop-resume.png",
          imageAlt: "Automated creation and filling by dropping resume",
        },
      ],
      // UX/UI tab cards.
      ux: [
        // Help Page of Google Calendar Connect and Link
        {
          title: "Help Page of Google Calendar Connect and Link",
          description:
            "Provide users with guidance on how to connect and link their Google Calendar, ensuring a seamless scheduling experience.",
          ticket: "EH-149",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/talents/new",
          ticketUrl: "https://abroaders.backlog.com/view/EH-149",
          images: [
            {
              src: "images/20-8-2026/calendar-1.png",
              alt: "Google Calendar help page connection instructions",
            },
            {
              src: "images/20-8-2026/calendar-2.png",
              alt: "Google Calendar help page linking instructions",
            },
          ],
        },
      ],
      // Admin tab cards.
      admin: [
        // Obtain EZHire Domain and Redirecting
        {
          title: "Obtain EZHire Domain and Redirecting",
          description:
            " Added domain migrations (Redirection from ats.reeracoen.tech to www.ezhire.asia).",
          ticket: "EH-124",
          showBadge: true,
          ticketUrl: "https://abroaders.backlog.com/view/EH-124",
          image: "images/20-8-2026/domain.png",
          imageAlt: "Obtain EZHire Domain and Redirecting",
        },
        // Add "Status" on Companies and Searchable by "Status"
        {
          title: "Add 'Status' on Companies and Searchable by 'Status'",
          description:
            "Add a “Status” field to Companies and allow users to search/filter companies by Status (Engage, New, Follow, Dormant)",
          ticket: "EH-153",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/companies",
          ticketUrl: "https://abroaders.backlog.com/view/EH-153",
          image: "images/20-8-2026/comp-status.png",
          imageAlt: "Add 'Status' on Companies and Searchable by 'Status'",
        },
        // Change order of jobs by updated date"
        {
          title: "Change order of jobs by updated date",
          description:
            "Change the order of jobs to be sorted by their updated date, ensuring the most recently updated jobs appear first.",
          ticket: "EH-148",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/jobs",
          ticketUrl: "https://abroaders.backlog.com/view/EH-148",
          image: "images/20-8-2026/job-order.png",
          imageAlt: "Change order of jobs by updated date",
        },
      ],
    },
  },
  {
    id: "2026-09-03",
    label: "September 3, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 8 },
      { month: "Sep", issues: 5 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 1, color: "#DB6258" },
      { label: "UX/UI", issues: 1, color: "#E88981" },
      { label: "Admin/Backend", issues: 1, color: "#F2B4AF" },
    ],
    // One representative example is shown in each release category.
    releaseItems: {

      feature: [
        // Create Job by dropping file card.
        {
          title: "Create Job by Dropping file",
          description:
            "Allow users to create a new job by dropping a file, streamlining the job creation process and improving efficiency.",
          ticket: "EH-162",
          showReviewBadge: true,
          showBadge: false,
          stgUrl: "https://stg.ezhire.asia/en/jobs/new",
          ticketUrl: "https://abroaders.backlog.com/view/EH-162",
          images: [
            {
              src: "images/03-9-2026/job-drop.png",
              alt: "Create Job by dropping file",
            },
            {
              src: "images/03-9-2026/job-drop-2.png",
              alt: "Create Job by dropping file",
            },
          ],
        },
        // Add job application source section in Talent Setting card.
        {
          title: "Add job application source management in Talent Setting",
          description:
            "Review and manage job application sources, such as job boards and other recruitment channels.",
          ticket: "EH-142",
          showReviewBadge: true,
          showBadge: false,
          stgUrl: "https://stg.ezhire.asia/en/jobs/new",
          ticketUrl: "https://abroaders.backlog.com/view/EH-142",
          image: "images/03-9-2026/job-source.png",
          imageAlt: "Add job application source management in Talent Setting",
        },
      ],
      ux: [
        // Add contact email info to agreement with DPA and ToU popup card.
        {
          title: "Add contact email info to agreement with DPA and ToU popup",
          description:
            "Add a contact email address to the DPA and Terms of Use agreement popup so users can request assistance or further information.",
          ticket: "EH-166",
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-166",
          image: "images/03-9-2026/popup.png",
          imageAlt: "Add contact email info to agreement with DPA and ToU popup",
        },

      ],
      admin: [
        // Add Master for Process on Selection Process.
        {
          title: "Add Master for Process on Selection Process",
          description:
            "Help Client Users to set Master for each customized process on Selection Process",
          ticket: "EH-159",
          showReviewBadge: true,
          showBadge: false,
          stgUrl: "https://stg.ezhire.asia/admin/jobs?q%5Bcompany_id_eq%5D=6&q%5Bstatus_eq%5D=0&commit=Filter&order=updated_at_desc",
          ticketUrl: "https://abroaders.backlog.com/view/EH-159",
          images: [
            {
              src: "images/03-9-2026/master.png",
              alt: "Add Master for Process on Selection Process",
            },
            {
              src: "images/03-9-2026/master-2.png",
              alt: "Add Master for Process on Selection Process",
            },
          ],
        },
        // Make Items searchable by Country
        {
          title: "Make Items searchable by Country",
          description:
            "Make items searchable by country so users can easily find relevant information based on their location.",
          ticket: "EH-163",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/company_applications?q[country_id_in]=4",
          ticketUrl: "https://abroaders.backlog.com/view/EH-163",
          image: "images/03-9-2026/comp-search.png",
          imageAlt: "Make Items searchable by Country",
        },
        // Remove items from searching criteria
        {
          title: "Remove items from searching criteria",
          description:
            "Remove items from searching criteria: Company Logo, Phone Number and Privacy Policy URL.",
          ticket: "EH-167",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/companies",
          ticketUrl: "https://abroaders.backlog.com/view/EH-167",
          image: "images/03-9-2026/remove.png",
          imageAlt: "Remove items from searching criteria",
        },
        // Remove items from searching criteria
        {
          title: "Adjustment of time format on Admin page",
          description:
            "Adjust the time format displayed on the Admin page for better readability.",
          ticket: "EH-164",
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/companies",
          ticketUrl: "https://abroaders.backlog.com/view/EH-164",
          image: "images/03-9-2026/time.png",
          imageAlt: "Adjustment of time format on Admin page",
        },
      ],
    },
  },
  {
    id: "2026-09-17",
    label: "September 17, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 8 },
      { month: "Sep", issues: 10 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 0, color: "#DB6258" },
      { label: "UX/UI", issues: 0, color: "#E88981" },
      { label: "Admin/Backend", issues: 0, color: "#F2B4AF" },
    ],
    releaseItems: {
      feature: [],
      ux: [],
      admin: [
        // Prepare /vn environment
        {
          title: "Prepare Vietnam branch environment",
          description:
            "Prepare the Vietnam branch environment for EZHire, ensuring that all necessary configurations and settings are in place for smooth operation.",
          ticket: "EH-168",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-168",
          images: [
            {
              src: "images/17-9-2026/vn-1.png",
              alt: "Prepare Vietnam branch environment",
            },
            {
              src: "images/17-9-2026/vn-2.png",
              alt: "Prepare Vietnam branch environment",
            },
            {
              src: "images/17-9-2026/vn-3.png",
              alt: "Prepare Vietnam branch environment",
            },
          ],
        },
        // Replace email address for job board synchronization
        {
          title: "Replace email address for job board synchronization",
          description:
            "Replace the existing email accounts with the @ezhire.asia addresses for Job Board synchronization, ensuring that all job board communications are properly routed through the new domain.",
          ticket: "EH-161",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-161",
        },
        // Add Selection Process on Admin page
        {
          title: "Add Selection Process on Admin page",
          description:
            "Add the Selection Process feature on the Admin page, allowing administrators to manage and track the selection process for job applicants more effectively.",
          ticket: "EH-170",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-170",
          images: [
            {
              src: "images/17-9-2026/select-1.png",
              alt: "Add Selection Process on Admin page",
            },
            {
              src: "images/17-9-2026/select-2.png",
              alt: "Add Selection Process on Admin page",
            },
          ],
        },
      ],
    },
  },
  {
    id: "2026-10-01",
    label: "October 1, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 8 },
      { month: "Sep", issues: 10 },
      { month: "Oct", issues: 4 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 0, color: "#DB6258" },
      { label: "UX/UI", issues: 0, color: "#E88981" },
      { label: "Admin/Backend", issues: 0, color: "#F2B4AF" },
    ],
    releaseItems: {
      feature: [
        // Automated filling by submitted resume
        {
          title: "Automated filling by submitted resume",
          description:
            "Automatically extract information from the submitted resume in Job Board and fill in the relevant fields to EZHire.",
          ticket: "EH-154",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/en/talents/5185",
          ticketUrl: "https://abroaders.backlog.com/view/EH-154",
          images: [
            {
              src: "images/01-10-2026/extract.png",
              alt: "Automated filling by submitted resume",
            },
            {
              src: "images/01-10-2026/extract-2.png",
              alt: "Automated filling by submitted resume",
            },
            {
              src: "images/01-10-2026/extract-3.png",
              alt: "Automated filling by submitted resume",
            },
          ],
        },
      ],
      ux: [
        // Update Help center for Job Sync's new email address
        {
          title: "Update Help center for Job Sync's new email address",
          description:
            "Upload a candidate’s resume to automatically extract and pre-fill talent information, making it faster and easier to add new candidates to the system.",
          ticket: "EH-174",
          showBadge: false,
          stgUrl: "https://stg.ezhire.asia/en/help/job_boards",
          ticketUrl: "https://abroaders.backlog.com/view/EH-174",
          images: [
            {
              src: "images/01-10-2026/jobsynce.png",
              alt: "Help center for Job Sync's new email address",
            },
            {
              src: "images/01-10-2026/jobsync-2.png",
              alt: "Help center for Job Sync's new email address",
            },
          ],
        },
      ],
      admin: [
        // Enhancement for Dashboard
        {
          title: "Enhancement for Dashboard",
          description:
            "Enhance the dashboard to provide a more comprehensive overview of key metrics and insights of client users.",
          ticket: "EH-172",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/dashboard",
          ticketUrl: "https://abroaders.backlog.com/view/EH-172",
          images: [
            {
              src: "images/01-10-2026/dashboard-1.png",
              alt: "Enhancement for Dashboard",
            },
            {
              src: "images/01-10-2026/dashboard-2.png",
              alt: "Enhancement for Dashboard",
            },
          ],
        },
        //  Notification to VN companies
        {
          title: " Notification to VN companies",
          description:
            "Adjust to send notification such as company registration for VN companies to email: info@reeracoen.com.vn",
          ticket: "EH-176",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-176",
          images: [
            {
              src: "images/01-10-2026/email-1.png",
              alt: " Notification to VN companies",
            },
            {
              src: "images/01-10-2026/email-2.png",
              alt: " Notification to VN companies",
            },
          ],
        },
      ],
    },
  },
  {
    id: "2026-10-15",
    label: "October 15, 2026",
    issueTrend: [
      { month: "Jun", issues: 9 },
      { month: "Jul", issues: 5 },
      { month: "Aug", issues: 8 },
      { month: "Sep", issues: 10 },
      { month: "Oct", issues: 11 },
    ],
    issueDistribution: [
      { label: "Feature", issues: 0, color: "#DB6258" },
      { label: "UX/UI", issues: 0, color: "#E88981" },
      { label: "Admin/Backend", issues: 0, color: "#F2B4AF" },
    ],
    releaseItems: {
      feature: [
        // Improve on customisability on Import/Export
        {
          title: "Improve on customisability on Import/Export",
          description:
            "Improve flexibility by letting users choose which data to include when importing or exporting.",
          ticket: "EH-173",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "https://www.ezhire.asia/transfer/export",
          ticketUrl: "https://abroaders.backlog.com/view/EH-173",
          images: [
            {
              src: "images/15-10-2026/import-1.png",
              alt: "Improve on customisability on Import/Export",
            },
            {
              src: "images/15-10-2026/import-2.png",
              alt: "Improve on customisability on Import/Export",
            },
          ],
        },
      ],
      ux: [
        // Adjust footer information
        {
          title: "Adjust footer information",
          description:
            "Adjust the footer information to provide accurate and up-to-date contact details and links.",
          ticket: "EH-196",
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-196",
          image: "images/15-10-2026/footer.png",
          imageAlt: "Adjust footer information",
        },
        // Replacing Reeracoen's PDPA agreement based on Country for Companies
        {
          title: "Replacing Reeracoen's PDPA agreement based on Country for Companies",
          description:
            "Update the PDPA consent shown to candidates applying through a Career Page so it reflects the company’s country-specific requirements, replacing the current Reeracoen consent.",
          ticket: "EH-179",
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-179",
          image: "images/15-10-2026/policy.png",
          imageAlt: "Replacing Reeracoen's PDPA agreement based on Country for Companies",
        },
        // Remove "Required" from items on Company Information
        {
          title: "Remove \"Required\" of Phone No. and Privacy Policy fields on Company Information",
          description:
            "Remove the “Required” label from fields in the Company Information section.",
          ticket: "EH-191",
          showBadge: true,
          stgUrl: "",
          ticketUrl: "https://abroaders.backlog.com/view/EH-191",
          image: "images/15-10-2026/remove.png",
          imageAlt: "Remove Phone No. and Privacy Policy fields required on Company Information",
        },
      ],
      admin: [
        // Display Selection Process for closed jobs.
        {
          title: "Display Selection Process for closed jobs",
          description:
            "Display the Selection Process for jobs with a Closed status in the Admin page, allowing users to view the selection process even after the job has been closed.",
          ticket: "EH-190",
          showReviewBadge: false,
          showBadge: true,
          stgUrl: "https://stg.ezhire.asia/admin/jobs?q%5Bstatus_eq%5D=2&commit=Filter&order=updated_at_desc",
          ticketUrl: "https://abroaders.backlog.com/view/EH-190",
          image: "images/15-10-2026/closed.png",
          imageAlt: "Display Selection Process for closed jobs",
        },
      ],
    },
  },
];

const milestoneDropdown = document.querySelector("#milestone-dropdown");
const milestoneSelect = document.querySelector("#milestone-select");
const milestoneSelected = document.querySelector("#milestone-selected");
const milestoneOptions = document.querySelector("#milestone-options");
const tabs = Array.from(document.querySelectorAll(".stat-card[data-tab]"));
const featureList = document.querySelector("#feature-list");
const issueChart = document.querySelector("#issue-chart");
const distributionChart = document.querySelector("#distribution-chart");
const distributionLegend = document.querySelector("#distribution-legend");
const statsSection = document.querySelector(".stats-section");
const goUpButton = document.querySelector("#go-up-button");
let activeMilestone = milestones[0];
let activeTab = "feature";
let activeDistributionLabel = null;

let goUpButtonFrame = null;
function updateGoUpButton() {
  goUpButtonFrame = null;
  if (!goUpButton) return;

  const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
  goUpButton.classList.toggle("go-up-button--visible", isAtBottom);
  goUpButton.setAttribute("aria-hidden", String(!isAtBottom));
}

window.addEventListener(
  "scroll",
  () => {
    if (goUpButtonFrame !== null) return;
    goUpButtonFrame = window.requestAnimationFrame(updateGoUpButton);
  },
  { passive: true },
);
window.addEventListener("resize", updateGoUpButton);
goUpButton?.addEventListener("click", () => {
  statsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});
updateGoUpButton();

const distributionIcons = {
  Feature: "images/figma-assets/dot-feature.svg",
  "UX/UI": "images/figma-assets/dot-ux.svg",
  "Admin/Backend": "images/figma-assets/dot-admin.svg",
};

const tabDistributionLabels = {
  feature: "Feature",
  ux: "UX/UI",
  admin: "Admin/Backend",
};

const distributionLabelTabs = Object.fromEntries(
  Object.entries(tabDistributionLabels).map(([tabName, label]) => [label, tabName]),
);

function getLatestMilestone() {
  return [...milestones].sort(
    (first, second) => new Date(second.id) - new Date(first.id),
  )[0];
}

function getSyncedIssueDistribution() {
  return activeMilestone.issueDistribution.map((item) => {
    const tabName = distributionLabelTabs[item.label];
    const issues = activeMilestone.releaseItems[tabName]?.length ?? 0;
    return { ...item, issues };
  });
}

function getMilestoneFromUrl() {
  const milestoneId = new URLSearchParams(window.location.search).get("milestone");
  return milestones.find((milestone) => milestone.id === milestoneId) ?? getLatestMilestone();
}

function updateMilestoneUrl(milestoneId) {
  const url = new URL(window.location.href);
  url.searchParams.set("milestone", milestoneId);
  window.history.pushState({ milestoneId }, "", url);
}

function renderMilestoneOptions() {
  milestoneSelected.textContent = activeMilestone.label;
  const sortedMilestones = [...milestones].sort(
    (first, second) => new Date(second.id) - new Date(first.id),
  );

  milestoneOptions.innerHTML = sortedMilestones
    .map(
      (milestone) =>
        `<button
          class="milestone-dropdown__option"
          type="button"
          role="option"
          data-milestone-id="${milestone.id}"
          aria-selected="${milestone.id === activeMilestone.id}"
        >
          ${milestone.label}
        </button>`,
    )
    .join("");
}

function setMilestoneDropdownOpen(isOpen) {
  milestoneDropdown.classList.toggle("milestone-dropdown--open", isOpen);
  milestoneSelect.setAttribute("aria-expanded", String(isOpen));
}

function selectMilestone(milestoneId, { updateUrl = true } = {}) {
  activeMilestone =
    milestones.find((milestone) => milestone.id === milestoneId) ?? milestones[0];
  if (updateUrl) updateMilestoneUrl(activeMilestone.id);
  milestoneSelected.textContent = activeMilestone.label;

  milestoneOptions.querySelectorAll(".milestone-dropdown__option").forEach((option) => {
    option.setAttribute(
      "aria-selected",
      String(option.dataset.milestoneId === activeMilestone.id),
    );
  });

  if (!activeMilestone.releaseItems[activeTab]) {
    activeTab = Object.keys(activeMilestone.releaseItems)[0];
  }

  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === activeTab;
    tab.classList.toggle("stat-card--active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  renderMilestonePage();
}

function renderIssueChart() {
  const issueTrend = activeMilestone.issueTrend;
  const axis = issueChart.querySelector(".bar-chart__y-axis");
  const plot = issueChart.querySelector(".bar-chart__plot");
  const maxIssues = Math.max(...issueTrend.map((item) => item.issues));
  const tickStep = 10;
  const axisMax = Math.max(tickStep, Math.ceil(maxIssues / tickStep) * tickStep);
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
        style="--bar-height: ${height}"
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
  const issueDistribution = getSyncedIssueDistribution();
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
    .filter((item) => item.issues > 0)
    .map((item, index) => {
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
        style="--segment-index: ${index}"
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

function renderDistributionLegend() {
  distributionLegend.innerHTML = getSyncedIssueDistribution()
    .map((item) => {
      const icon = distributionIcons[item.label] ?? distributionIcons.Feature;
      return `<span>
        <img src="${icon}" alt="" />
        ${item.label}: ${item.issues}
      </span>`;
    })
    .join("");
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
  const issueDistribution = getSyncedIssueDistribution().filter(
    (item) => item.issues > 0,
  );
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
  if (total === 0) return null;
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
  const images = item.images ?? (
    item.image ? [{ src: item.image, alt: item.imageAlt }] : []
  );
  const hasMultipleImages = images.length > 1;
  const imageMarkup = images.length
    ? `<div class="feature-card__image${hasMultipleImages ? " feature-card__image--multi" : ""}">
        ${images
      .map((image) => `<div class="feature-card__image-frame">
            <img src="${image.src}" alt="${image.alt}" />
          </div>`)
      .join("")}
      </div>`
    : "";
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
  const badgeMarkup = item.showReviewBadge
    ? `<span class="pill feature-card__badge feature-card__badge--review" aria-label="In Review status">
          <i class="ph ph-eye" aria-hidden="true"></i>
          <span>In Review</span>
        </span>`
    : item.showBadge
      ? `<span class="pill pill--prod feature-card__badge" aria-label="Production environment">
            <i class="ph ph-laptop" aria-hidden="true"></i>
            <span>Deployed</span>
          </span>`
      : "";

  return `<article class="feature-card">
    <div class="feature-card__copy">
      <div class="feature-card__header">
        <h2>${item.title}</h2>
        ${badgeMarkup}
      </div>
      <p>${item.description}</p>
      <div class="feature-links">
        ${stgMarkup}
        ${ticketMarkup}
      </div>
    </div>
    ${imageMarkup}
  </article>`;
}

function renderFeatureList(tabName) {
  featureList.innerHTML = activeMilestone.releaseItems[tabName]
    .map(createFeatureCard)
    .join("");
}

function renderTabCounts() {
  const issueDistribution = getSyncedIssueDistribution();
  tabs.forEach((tab) => {
    const distributionLabel = tabDistributionLabels[tab.dataset.tab];
    const distributionItem = issueDistribution.find(
      (item) => item.label === distributionLabel,
    );
    const count = distributionItem?.issues ?? 0;
    tab.querySelector("strong").textContent = count;
  });
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

function renderMilestonePage() {
  activeDistributionLabel = null;
  renderTabCounts();
  renderIssueChart();
  renderDistributionChart();
  renderDistributionLegend();
  renderFeatureList(activeTab);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

milestoneSelect.addEventListener("click", () => {
  const isOpen = milestoneDropdown.classList.contains("milestone-dropdown--open");
  setMilestoneDropdownOpen(!isOpen);
});

milestoneSelect.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMilestoneDropdownOpen(false);
    return;
  }

  if (event.key !== "ArrowDown" && event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  setMilestoneDropdownOpen(true);
  const selectedOption = milestoneOptions.querySelector('[aria-selected="true"]');
  const firstOption = milestoneOptions.querySelector(".milestone-dropdown__option");
  (selectedOption ?? firstOption)?.focus();
});

milestoneOptions.addEventListener("click", (event) => {
  const option = event.target.closest(".milestone-dropdown__option");
  if (!option) return;
  selectMilestone(option.dataset.milestoneId);
  setMilestoneDropdownOpen(false);
  milestoneSelect.focus({ preventScroll: true });
});

milestoneOptions.addEventListener("keydown", (event) => {
  const options = Array.from(
    milestoneOptions.querySelectorAll(".milestone-dropdown__option"),
  );
  const currentIndex = options.indexOf(document.activeElement);

  if (event.key === "Escape") {
    event.preventDefault();
    setMilestoneDropdownOpen(false);
    milestoneSelect.focus({ preventScroll: true });
    return;
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + direction + options.length) % options.length;
    options[nextIndex]?.focus();
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    document.activeElement?.click();
  }
});

document.addEventListener("click", (event) => {
  if (milestoneDropdown.contains(event.target)) return;
  setMilestoneDropdownOpen(false);
});

window.addEventListener("popstate", () => {
  selectMilestone(getMilestoneFromUrl().id, { updateUrl: false });
});

activeMilestone = getMilestoneFromUrl();
renderMilestoneOptions();
renderMilestonePage();
