export function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}
export function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [420, 400, 220, 160, 980, 750, 20],
                    backgroundColor: 'rgba(255, 99, 192, 0.2)',
                    borderColor: 'rgb(255, 99, 192)',
                    borderWidth: 1
                },
                {
                    label: 'Dataset 2',
                    data: [430, 820, 130, 500, 240, 350, 130],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1000,
                    ticks: {
                        stepSize: 100
                    }
                }
            }
        }
    });
}
export function createHorizontalBarChart() {
    const ctx = document.getElementById('horizontalBarChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [-750, -550, 0, 900, -350, -550, 480],
                    backgroundColor: 'rgba(255, 206, 86, 0.4)',
                    borderWidth: 0
                },
                {
                    label: 'Dataset 2',
                    data: [780, -900, 350, 230, 400, 280, 60],
                    backgroundColor: 'rgba(194, 123, 255, 0.4)',
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                }
            },
            scales: {
                x: {
                    min: -1000,
                    max: 1000,
                    ticks: {
                        stepSize: 200
                    }
                }
            }
        }
    });
}
export function createMixedBarChart() {
    const ctx = document.getElementById('mixedBarChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [-230, -750, 100, 700, -400, 60, -120],
                    backgroundColor: 'rgba(255, 99, 99, 0.4)',
                    borderWidth: 0
                },
                {
                    label: 'Dataset 2',
                    data: [-650, -1350, -800, 400, -900, -700, 500],
                    backgroundColor: 'rgba(99, 230, 177, 0.4)',
                    borderWidth: 0
                },
                {
                    label: 'Dataset 3',
                    data: [-130, -130, 450, -700, 600, 60, 350],
                    backgroundColor: 'rgba(99, 153, 255, 0.4)',
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    min: -1500,
                    max: 1500,
                    ticks: {
                        stepSize: 500
                    }
                }
            }
        }
    });
}
export function createPolarAreaChart() {
    const ctx = document.getElementById('polarAreaChart').getContext('2d');
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 18, 5, 6, 3, 4],
                backgroundColor: [
                    'rgba(255, 99, 99, 0.4)',
                    'rgba(99, 169, 255, 0.4)',
                    'rgba(255, 214, 91, 0.4)',
                    'rgba(99, 230, 177, 0.4)',
                    'rgba(137, 112, 255, 0.5)',
                    'rgba(255, 174, 99, 0.4)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });
}
export function createDoughnutChart() {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 18, 5, 6, 3, 4],
                backgroundColor: [
                    'rgba(255, 153, 153, 0.4)',
                    'rgba(153, 204, 255, 0.4)',
                    'rgba(255, 214, 91, 0.4)',
                    'rgba(99, 230, 177, 0.4)',
                    'rgba(137, 112, 255, 0.5)',
                    'rgba(255, 174, 99, 0.4)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}
export function createPositiveNegativeLineChart() {
    const ctx = document.getElementById('positiveNegativeLineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [-900, 930, 400, 80, -100, -350, 430],
                    borderColor: 'rgba(255, 214, 91, 0.55)',
                    backgroundColor: 'rgba(255, 214, 91, 0.55)',
                    pointRadius: 8,
                    borderWidth: 3,
                    fill: false
                },
                {
                    label: 'Dataset 2',
                    data: [-900, -480, -700, -540, -200, -550, 0],
                    borderColor: 'rgba(137, 112, 255, 0.6)',
                    backgroundColor: 'rgba(137, 112, 255, 0.6)',
                    pointRadius: 8,
                    borderWidth: 3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    min: -1000,
                    max: 1000,
                    ticks: {
                        stepSize: 200
                    }
                }
            }
        }
    });
}
export function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 18, 5, 6, 3, 4],
                backgroundColor: [
                    'rgba(255, 153, 153, 0.4)',
                    'rgba(153, 204, 255, 0.4)',
                    'rgba(255, 214, 91, 0.4)',
                    'rgba(99, 230, 177, 0.4)',
                    'rgba(137, 112, 255, 0.5)',
                    'rgba(255, 174, 99, 0.4)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}