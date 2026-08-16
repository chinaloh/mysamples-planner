/* ===========================
   MySamples Planner - App Logic
   Single Page Application
   =========================== */

// Page content templates
const pageContent = {
    home: {
        title: 'Home',
        description: 'Welcome to MySamples Planner',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Getting Started</h2>
                            </div>
                            <div class="card-body">
                                <p>Welcome to MySamples Planner, your professional dashboard for sample management and wafer planning.</p>
                                <p>Use the left sidebar to navigate between different sections of the application.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Quick Stats</h2>
                            </div>
                            <div class="card-body">
                                <p><strong>Total Samples:</strong> 0</p>
                                <p><strong>Active Plans:</strong> 0</p>
                                <p><strong>Simulations:</strong> 0</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Recent Activity</h2>
                            </div>
                            <div class="card-body">
                                <p>No recent activity yet. Start by creating a new sample or wafer plan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    mysamples: {
        title: 'MySamples',
        description: 'Manage your samples collection',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Sample List</h2>
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sample ID</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Date Created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>No samples found</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button class="btn btn-primary mt-3">Add Sample</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    'wafer-plan': {
        title: 'Wafer Plan',
        description: 'Create and manage wafer plans',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Wafer Plan Configuration</h2>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="planName">Plan Name</label>
                                    <input type="text" id="planName" placeholder="Enter plan name">
                                </div>
                                <div class="form-group">
                                    <label for="waferSize">Wafer Size</label>
                                    <select id="waferSize">
                                        <option value="">-- Select Size --</option>
                                        <option value="6">6 inch</option>
                                        <option value="8">8 inch</option>
                                        <option value="12">12 inch</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="material">Material</label>
                                    <input type="text" id="material" placeholder="Enter material type">
                                </div>
                                <button class="btn btn-primary">Create Plan</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Existing Plans</h2>
                            </div>
                            <div class="card-body">
                                <p>No plans created yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    'wafer-simulation': {
        title: 'Wafer Simulation',
        description: 'Simulate wafer processing scenarios',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">New Simulation</h2>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="simName">Simulation Name</label>
                                    <input type="text" id="simName" placeholder="Enter simulation name">
                                </div>
                                <div class="form-group">
                                    <label for="planSelect">Select Plan</label>
                                    <select id="planSelect">
                                        <option value="">-- Select Plan --</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="temperature">Temperature (°C)</label>
                                    <input type="number" id="temperature" placeholder="Enter temperature">
                                </div>
                                <div class="form-group">
                                    <label for="duration">Duration (minutes)</label>
                                    <input type="number" id="duration" placeholder="Enter duration">
                                </div>
                                <button class="btn btn-primary">Run Simulation</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Simulation Results</h2>
                            </div>
                            <div class="card-body">
                                <p>No simulations run yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    'timeline-simulation': {
        title: 'Timeline Simulation',
        description: 'Visualize and simulate processing timelines',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Timeline Configuration</h2>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="timelineType">Timeline Type</label>
                                    <select id="timelineType">
                                        <option value="">-- Select Type --</option>
                                        <option value="linear">Linear Process</option>
                                        <option value="parallel">Parallel Process</option>
                                        <option value="hybrid">Hybrid Process</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="startDate">Start Date</label>
                                    <input type="date" id="startDate">
                                </div>
                                <div class="form-group">
                                    <label for="endDate">End Date</label>
                                    <input type="date" id="endDate">
                                </div>
                                <button class="btn btn-primary">Generate Timeline</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Timeline Visualization</h2>
                            </div>
                            <div class="card-body">
                                <p>No timeline generated yet. Configure the timeline above to visualize.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    help: {
        title: 'Help',
        description: 'Documentation and support',
        render() {
            return `
                <div class="page">
                    <div class="page-header">
                        <h1 class="page-title">${this.title}</h1>
                        <p class="page-description">${this.description}</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Getting Started Guide</h2>
                            </div>
                            <div class="card-body">
                                <h3>MySamples Planner Overview</h3>
                                <p>MySamples Planner is a professional dashboard for managing sample collections, creating wafer plans, and simulating processing scenarios.</p>
                                <h3>Key Features</h3>
                                <ul style="margin-left: 20px; margin-top: 10px; margin-bottom: 10px;">
                                    <li><strong>Sample Management:</strong> Organize and track your samples</li>
                                    <li><strong>Wafer Planning:</strong> Create detailed wafer process plans</li>
                                    <li><strong>Simulations:</strong> Run wafer and timeline simulations</li>
                                    <li><strong>Timeline Visualization:</strong> Plan and track processing schedules</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Frequently Asked Questions</h2>
                            </div>
                            <div class="card-body">
                                <p><strong>Q: How do I create a new sample?</strong></p>
                                <p>A: Navigate to the "MySamples" section and click "Add Sample" to create a new sample entry.</p>
                                <p style="margin-top: 15px;"><strong>Q: Can I export my data?</strong></p>
                                <p>A: Export functionality will be available in future releases.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Support</h2>
                            </div>
                            <div class="card-body">
                                <p>For technical support, please contact: <strong>support@mysamples.com</strong></p>
                                <p>For bug reports and feature requests, visit our GitHub repository.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentArea = document.getElementById('content');

    // Set initial page
    renderPage('home');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const page = link.getAttribute('data-page');

            // Update active link styling
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Render the selected page
            renderPage(page);
        });
    });

    /**
     * Render page content based on page key
     * @param {string} page - The page key to render
     */
    function renderPage(page) {
        if (pageContent[page]) {
            contentArea.innerHTML = pageContent[page].render();
        } else {
            contentArea.innerHTML = `<div class="page"><p>Page not found</p></div>`;
        }
    }
});
